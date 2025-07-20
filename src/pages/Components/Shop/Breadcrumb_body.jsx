// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// images
import img from "../../../assets/shop/category-12.jpg";
import img2 from "../../../assets/shop/category-9.jpg";
import img3 from "../../../assets/shop/category-13.jpg";
import img4 from "../../../assets/shop/category-11.jpg";
import img5 from "../../../assets/shop/category-8.jpg";
import img6 from "../../../assets/shop/category-10.jpg";
import img7 from "../../../assets/shop/category-7.jpg";


export const Breadcrumb_body = () => {

  return (
    <div className="breadcrumb_body">
        <div className="Title text-center">
          <h1>Shop</h1>
        </div>
        <div className="breadcrumbbody">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className=" category-slider">
          <div className="col-md-6">
            <div className="comments">
              <Swiper
                navigation={false}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                className="mySwiper round"
              >
                <SwiperSlide>
                  <a href="#">
                    <img className="img1" src={img} alt="" />
                  </a>
                  <a href="#">
                    <h4>All glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="#">
                    <img src={img2} alt="" />
                  </a>
                  <a href="#">
                    <h4>Eco-Friendly</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img3} alt="" />
                  </a>
                  <a href="">
                    <h4>Glitter Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img4} alt="" />
                  </a>
                  <a href="">
                    <h4>Kids Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img5} alt="" />
                  </a>
                  <a href="">
                    <h4>Men&apos;s Glasses</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img6} alt="" />
                  </a>
                  <a href="">
                    <h4>Street Style</h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="">
                    <img src={img7} alt="" />
                  </a>
                  <a href="">
                    <h4>Women&apos;s Glasses</h4>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
  )
}
