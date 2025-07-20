import '../style/Footer.scss';
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-contents">
      <div className="about-us">
          <h1>Pages</h1>
          <p><NavLink to='/shop'>Our Shop</NavLink></p>
          <p><NavLink to='/aboutUs'>About us</NavLink></p>
          <p><NavLink to='/partnerUs'>Partner with us</NavLink></p>
          <p><NavLink to='/blog'>Blog</NavLink></p>
          <p><NavLink to='/contact'>Contact</NavLink></p>
        </div>
        <div className="get-help">
          <h1>Get Help</h1>
          <p><a href="">Delivery Information</a></p>
          <p><a href="">Term & Conditions</a></p>
          <p><a href="">Returns & Refunds</a></p>
          <p><a href="">Privacy Notice</a></p>
          <p><a href="">Shopping FAQ&apos;s</a></p>
        </div>
        <div className="customer-care">
          <h1>Customer Care</h1>
          <p><a href="">FAQs</a></p>
          <p><a href="">Store Location</a></p>
          <p><a href="">Returns</a></p>
          <p><a href="">Shipping Information</a></p>
          <p><a href="">Wholesale</a></p>
        </div>
        <div className="social-media">
          <h1>Contact Details </h1>
          <div className="media-icons">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          
          <p><i className="bi bi-envelope"> &nbsp;</i> support@velocityopticals.com</p>
          <p><i className="bi bi-telephone"> &nbsp;</i>01140393102</p>
          <p>Velocity Optics Pvt. Ltd. B-38, First Floor, Okhla Phase-1, New Delhi - 110020, India</p>
        </div>
      </div>
      <div className="footer-buttom-content">
        <div className="copyright">
          <p>copyright <i className="bi bi-c-circle"></i> 2024. All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}
