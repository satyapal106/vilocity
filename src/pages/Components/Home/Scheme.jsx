import { Link } from "react-router-dom"
import glass from '../../../assets/images/glass1.jpg'
import glass2 from '../../../assets/shop/1-600x600.jpg'
import { useState } from "react"

export const Scheme = (Data) => {


  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="scheme">
    <div className="scheme-text">
      <p className="title">Our Latest Products</p>
      <p className="p-content">
        &quot;
        Lorem Ipsum is simply dummy text ofthe printing
        <br />and typesetting industry.&quot;
      </p>
      <div className="latestProductButton">
        <Link to="/shop" className="primary-btn">Shop Now</Link>
      </div>
    </div>
    <div className="image-map">
      <img src={Data.Img} alt="image-maping" useMap="#imageMap" />
      <div className="product1-circle" onClick={()=>setShow1(!show1)}>
        <i className="bi bi-plus-lg"></i>

        <div className={`showCard ${show1 ? '' : 'hide'}`}>
          <img src={glass} alt="" />
          <Link to={'/shop'}>
            <button className="primary-btn">Check Out</button>
          </Link>
          <div className="square"></div>
        </div>
      </div>

      <div className="product2-circle" onClick={()=>setShow2(!show2)}>
        <i className="bi bi-plus-lg"></i>

        <div className={`showCard ${show2 ? '' : 'hide'}`}>
          <img src={glass2} alt="" />
          <Link to={'/shop'}>
            <button className="primary-btn">Check Out</button>
          </Link>
          <div className="square"></div>
        </div>
      </div>
    </div>
  </div>
  )
}
