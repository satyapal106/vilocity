// title
import {useTitle} from '../hooks/useTitle';
import img from '../assets/images/img8.jpg';
import img2 from '../assets/images/img6.jpg';
import '../style/aboutUs.scss';


export const AboutUs = () => {

  useTitle('About Us | Velocity Opticals')

  return (
    <div className="aboutUsPage">
      <div className="contents">

        <div className="content1">
          <div className="about-us-title">
            <div className="title">About Us</div>
            <div className="large-title"> is simply dummy text of the printing and typesetting industry.</div>
          </div>
        </div>

        <div className="content2">
          <img src={img} alt="" />
        </div>

        <div className="about-us-text">
          <p className='p-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="experiences">
            <div className="exp">
              <div className="achive">100 <span>+</span></div>
              <div className="field">Years of experience</div>
            </div>

            <div className="exp">
              <div className="achive">6000 <span>+</span></div>
              <div className="field">Products</div>
            </div>

            <div className="exp">
              <div className="achive">500 <span>+</span></div>
              <div className="field">Channel Partners</div>
            </div>

            <div className="exp">
              <div className="achive">10000 <span>+</span></div>
              <div className="field">Happy Customers</div>
            </div>
          </div>
      </div>

      <div className="partners">
      <div className="title">Meet Our Team</div>
        <div className="members">
        <div className="member-card">
          <img src={img2} alt="" />
          <p className="member-name">Person Name</p>
          <p className="role">Some Role</p>
          <div className="social">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-envelope"></i>
          </div>
        </div>

        <div className="member-card">
          <img src={img2} alt="" />
          <p className="member-name">Person Name</p>
          <p className="role">Some Role</p>
          <div className="social">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-envelope"></i>
          </div>
        </div>

        <div className="member-card">
          <img src={img2} alt="" />
          <p className="member-name">Person Name</p>
          <p className="role">Some Role</p>
          <div className="social">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-envelope"></i>
          </div>
        </div>
        
        <div className="member-card">
          <img src={img2} alt="" />
          <p className="member-name">Person Name</p>
          <p className="role">Some Role</p>
          <div className="social">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-envelope"></i>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
