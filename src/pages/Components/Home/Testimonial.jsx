import { TestimonialCard } from "../../../components";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import testimonialImg from '../../../assets/images/img8.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

export const Testimonial = () => {
  

  return (
    <div className="testimonial">
        <div className="testimonial-marqueee">
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
          <p>testimonial<span className="dot"></span></p>
        </div>

        <div className="testimonial-content">
          <div className="image">
            <img src={testimonialImg} alt="" />
          </div>
          <div className="comments">
            <Swiper
              navigation={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
              <SwiperSlide><TestimonialCard/></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
  )
}
