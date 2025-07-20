// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import {Card} from '../../../components/Card'
import { useEffect, useState } from 'react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export const ProductCarousel = () => {

  const [allProducts, setProducts] = useState([])

  useEffect(()=>{
    axios.get("https://faradic.codtrees-dev.cloud/api/showProducts")
      .then(res=>{
        setProducts(res.data.Products);
      }).catch(error=>{
        console.log(error.message)
      })
  },[])

  const aa = true;
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              navigation: {
                enabled: false,
              },
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              navigation: {
                enabled: {aa},
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },

          }}
        className="mySwiper"
      >
        {
          allProducts.slice(0,14).map(prod => (            
            <SwiperSlide  key={prod.id}>
              <Card data={prod}/>
            </SwiperSlide>
          ))
        }        
      </Swiper>
    </div>
  )
}
