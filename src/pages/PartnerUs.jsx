import { Registration } from "./Registration"
import { useContext, useEffect } from "react"
import { SignInContext } from "../App"
import { useTitle } from "../hooks/useTitle"
import { Link, NavLink } from "react-router-dom"
import { PartnerScheme, Testimonial } from "./Components/Home"
import '../style/PartnerUs.scss'

import img from '../assets/images/img1.jpg';

export const PartnerUs = () => {

    window.addEventListener('scroll', ()=>{
        console.log(window.pageYOffset);
    })

    const scrollType = ()=>{
        window.scroll(0, 946);
    }
    const scrollBenefits = ()=>{
        window.scroll(0, 1533);
    }
    const scrollScheme = ()=>{
        window.scroll(0, 1940);
    }
    const scrollTestimoneal = ()=>{
        window.scroll(0, 2499);
    }
    const scrollForm = ()=>{
        window.scroll(0, 3165);
    }

    useEffect(()=>{
        scrollForm()
    },[])
    useTitle('Partner With Us | Velocity Opticals')

    const [signedIn, setSignedIn] = useContext(SignInContext)

  return (
    <section>
        <div className="topBanner">
            <div className="bannerContent">
                <p className="top-p">Partner With Us</p>
                <p className="big-text">
                    Simply dummy text of the printing <br />and typesetting
                </p>
                <p className="last-p">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimenbook.</p>
                <Link to={''} onClick={scrollForm} className="primary-btn">Partner With Us</Link>
            </div>
        </div>      

        <div className="partnerUs">
            <div className="centerContainer our-partner-program ">
                <p className="heading">
                    Our Partner Programme
                </p>

                <div className="p-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&aois;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsu
                </div>
            </div>  
            
            <div className="our-partner-menu">
                <div className="nav-center centerContainer">
                    <NavLink to={''} onClick={scrollType} className="primary-btn">Type Of Partner</NavLink>
                    <NavLink to={''} onClick={scrollBenefits} className="primary-btn">Partner Benefits</NavLink>
                    <NavLink to={''} onClick={scrollScheme} href="#scheme" className="primary-btn">Partner Scheme</NavLink>
                    <NavLink to={''} onClick={scrollTestimoneal} href="#testimoneals" className="primary-btn">Partner Testimoneals</NavLink>
                    {
                        signedIn ? "" : <NavLink to={''} onClick={scrollForm} className="primary-btn">Partner With Us</NavLink>
                    }
                </div>
            </div>          

            <div className="partner-types centerContainer" id="types">
                <div className="title">Types of Partners</div>
                <div className="partner-type-cards">
                    <div className="type-card">
                        <img src={img} alt="" />
                        <div className="card-content">
                            <p className="card-title">Dealer</p>
                            <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>

                    <div className="type-card">
                        <img src={img} alt="" />
                        <div className="card-content">
                            <p className="card-title">Distributer</p>
                            <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>

                    <div className="type-card">
                        <img src={img} alt="" />
                        <div className="card-content">
                            <p className="card-title">Direct Dealer</p>
                            <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partner-us-content centerContainer" id="benefits">
                <div className="image">
                    
                </div>
                <div className="contents">
                    <p className="heading">Your benefits as our partner</p>
                    <ul>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                        <li><p>simply dummy text of the printing and typesetting industry.</p></li>
                    </ul>
                </div>
            </div>

            <div id="scheme">
                <PartnerScheme/>
            </div>

            <div id="testimoneals">
                <Testimonial/>
            </div>

            {
            signedIn ? <div className="margin-bottom-100px"></div> : <div id="form"><Registration/></div>
        }
        </div>
    </section>
  )
}
