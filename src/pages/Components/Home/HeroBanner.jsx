import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/banner1.jpg';
import banner2 from '../../../assets/images/banner2.jpg';


export const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="banner" >
        <a href="">
          <img src={banner1} alt="banner1" />
        </a>

        <div className="bannerContent">
          <p className='bannerTitle'>New Arraivals</p>
          <Link to={'/shop'} className='primary-btn'>SEE MORE</Link>
        </div>
      </div>

      <div className="banner">
        <a href="">
          <img src={banner2} alt="banner2" />
        </a>

        <div className="bannerContent">
          <p className='bannerTitle'>New Arraivals</p>
          <Link to={'/shop'} className='primary-btn'>SEE MORE</Link>
        </div>
      </div>
    </div>
  )
}
