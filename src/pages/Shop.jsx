import { Breadcrumb_body, Product_filter } from './Components/Shop/index';

// title
import {useTitle} from '../hooks/useTitle';

import "../style/Shop.scss";

import { Card } from '../components/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Shop = () => {

  const [allProducts, setProducts] = useState([])
  useTitle('Shop | Velocity Opticals')

  useEffect(()=>{
    axios.get("https://faradic.codtrees-dev.cloud/api/showProducts")
      .then(res=>{
        setProducts(res.data.Products);
      }).catch(error=>{
        console.log(error.message)
      })
  },[])

  return (
    <div className='shop-style'>
      <Breadcrumb_body/>

      <div className="row">
        <Product_filter/>
        <div className="col-md-8">
          <div className="small-container produtcs-list">
            <div className="row row-2">
              <select>
                <option value="">Default Sorting</option>
                <option value="">Sort By Popularity</option>
                <option value="">Sort By Average Rating</option>
                <option value="">Sort By Latest</option>
                <option value="">Sort By Price: Low To High</option>
                <option value="">Sort By Price: High To Low</option>
              </select>
            </div>

            <div className="theRow">
              {
                allProducts.slice(0,14).map(prod => (
                  <Card key={prod.id} data={prod}/>
                ))
              }

            </div>

            <div className="page-btn text-center">
              <a href="" className="load-more">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
