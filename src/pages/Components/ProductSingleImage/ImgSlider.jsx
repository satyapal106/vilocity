import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../../assets/images/img9.jpg';
import img2 from '../../../assets/images/partnerUs.jpg';
import img3 from '../../../assets/images/img5.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const ImgSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        className="main-img"
      >
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={3}
        freeMode={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-img"
      >
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
