import { HeroBanner, AboutUs, Scheme, Categories, Testimonial, EnquireForm, PartnerSchemeSlider} from "./Components/Home/index";
import { ProductCarousel, UspCard, BlogCard } from "../components/index";

// title
import {useTitle} from '../hooks/useTitle';

import aboutUsImg from '../assets/images/img1.jpg'
import schemeImg from '../assets/images/scheme-img.jpg';

//category images
import allCate from '../assets/images/img10.jpg'
import womenCate from '../assets/images/img1.jpg';
import menCate from '../assets/images/img4.jpg';
import ecoCate from '../assets/images/img5.jpg';
import streetCate from '../assets/images/img7.jpg';


import '../style/Home.scss';
import { Link } from "react-router-dom";

import { useContext } from "react";
import { SignInContext } from "../App";

export const Home = () => {

  useTitle('Home | Velocity Opticals')

  const [signedIn, setSignedIn] = useContext(SignInContext)

  return (
    <>
      <HeroBanner/>

      {
        signedIn ? <div className="margin-bottom-100px"></div>:
          <div className="home-login">
            <div className="home-login-register">
              <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
              <Link to="/registration" className="primary-btn">Login or Register</Link>
            </div>    
          </div> 
      }  

      <AboutUs Img={aboutUsImg}/>

      <div className="centerContainer">
        <div className="title partner-title">Partner With Us</div>
        <div className="partner-with-us">
          <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
          <Link to="/partnerus" className="primary-btn">Let&apos;s Go!</Link>
        </div>    
      </div>      

      <PartnerSchemeSlider/>

      <div className="OurUSP">
        <p className="title">Our USP</p>
        <div className="uspCards">
          <div className="usp">
            <i className="bi bi-gift"></i>
            <div className="usp-title">Genuine Product</div>
            <div className="usp-text">Sed molestie tempus neque, ac mollis nulla fermentum at.</div>
          </div>

          <div className="usp">
          <i className="bi bi-credit-card"></i>
            <div className="usp-title">Flexible Credit Period</div>
            <div className="usp-text">Sed molestie tempus neque, ac mollis nulla fermentum at.</div>
          </div>

          <div className="usp">
            <i className="bi bi-truck"></i>
            <div className="usp-title">Swift Delivery</div>
            <div className="usp-text">Sed molestie tempus neque, ac mollis nulla fermentum at.</div>
          </div>
          
          <div className="usp">
            <i className="bi bi-info-circle"></i>
            <div className="usp-title">Training and Support</div>
            <div className="usp-text">Sed molestie tempus neque, ac mollis nulla fermentum at.</div>
          </div>
        </div>
      </div>

      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Our Product</p>
          <ProductCarousel/>
          <div className="latestProductButton">
            <Link to="/shop" className="primary-btn">Shop Now</Link>
          </div>
        </div>
      </div>

      <div className="marquee-div">
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
        <p>Sunglasses <span className="dot"></span></p>
      </div>        

      <Scheme Img={schemeImg}/>

      <Categories ImgArr={[allCate, womenCate, menCate, ecoCate, streetCate]}/>

      <Testimonial/>

      <div className="latestProduct">
        <div className="carouselContainer">
          <p className="title">Blogs</p>
          <div className="blogCards">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </div>

      <EnquireForm/>
    </>
  )
}
