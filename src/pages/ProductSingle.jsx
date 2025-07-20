import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCarousel } from "../components";
import axios from "axios";
import '../style/Product-single.scss'
import { ImgSlider } from "./Components/ProductSingleImage/ImgSlider";


export const ProductSingle = () => {

    const id = useParams().id;
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get("https://faradic.codtrees-dev.cloud/api/showProducts")
          .then(res=>{
            
            res.data.Products.forEach(item => {
                if(item.id == id){
                    setProduct(item);
                    console.log(item)
                }
            })

          }).catch(error=>{
            console.log(error.message)
          })
    },[id])

  return (
    <div className="single-product">
        <div className="product">
            <div className="product-image">
                <div className="image-carousel">
                    <ImgSlider/>
                </div>
            </div>
            <div className="product-details">

                <p className="product-title">{product.product_name}</p>
                <p className="p-content soft-text">{product.product_category}</p>
                <div className="product-price">
                    <p className="">Rs.{product.product_price}</p>
                    <p className="gap" >-</p>
                    <p >Rs.{product.product_salePrice}</p>
                    {/* <p className="gap discount" >{discount}% discount</p> */}
                </div>
                <div className="underline"></div>
                <p className="product-short-dec p-content">{product.full_description}</p>

                <div className="actions">
                    <div className="action-buttons">
                        <div className="action-btn primary-btn">Add to Cart</div>
                        <div className="wishlist">Add to WishList</div>
                    </div>

                    {/* <div className="action-btn primary-btn">Buy Now</div> */}
                </div>

                <div className="delivery-policy">
                    <p className="p-content "><i className="bi bi-truck"></i>Free worldwide shipping on all orders over $100</p>
                    <p className="p-content"><i className="bi bi-hourglass-split"></i>Delivers in: 3-7 Working Days Shipping & Return</p>
                </div>

                <div className="underline"></div>

                <div className="tags">
                    <p className="p-content"><span>SKU:</span> {product.sku}</p>
                    <p className="p-content"><span>Category:</span> {product.product_category}</p>
                    <p className="p-content"><span>Tag:</span> {product.tag}</p>
                    <p className="p-content"><span>Share:</span> <i className="bi bi-twitter-x"></i> <i className="bi bi-instagram"></i> <i className="bi bi-facebook"></i></p>
                </div>
            </div>
        </div>
        <div className="recomendation">
            <div className="title">Recommended</div>
            <ProductCarousel/>
        </div>
    </div>
  )
}
