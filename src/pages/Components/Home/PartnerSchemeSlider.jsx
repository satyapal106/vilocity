import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import img from '../../../assets/PartnerSchemeImg/partnerScheme.jpg';
import img1 from '../../../assets/PartnerSchemeImg/partnerScheme1.webp';
import img2 from '../../../assets/PartnerSchemeImg/partnerScheme2.jpg';
import { Link } from 'react-router-dom';

export const PartnerSchemeSlider = () => {
  return (
    <div className="partnerSchemeSlider">
        <div className="title">Partner Scheme</div>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="mySwiper"
        >

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <Link to={'/partnerScheme'}>
                    <img src={img1} alt="" />
                    <div className="sliderContents">
                        <div className="sliderBannerText">
                            <div className="title">Some Title</div>
                            <div className="p-content">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</div>
                            <button className="primary-btn">Lets Go!</button>
                        </div>
                    </div>
                </Link>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <Link to={'/partnerScheme'}>
                    <img src={img} alt="" />
                    <div className="sliderContents">
                        <div className="sliderBannerText">
                            <div className="title">Some Title</div>
                            <div className="p-content">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</div>
                            <button className="primary-btn">Lets Go!</button>
                        </div>
                    </div>
                </Link>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <Link to={'/partnerScheme'}>
                    <img src={img2} alt="" />
                    <div className="sliderContents">
                        <div className="sliderBannerText">
                            <div className="title">Some Title</div>
                            <div className="p-content">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</div>
                            <button className="primary-btn">Lets Go!</button>
                        </div>
                    </div>
                </Link>
            </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}
