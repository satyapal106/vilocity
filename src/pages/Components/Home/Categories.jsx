import { useState } from "react";
export const Categories = (Data) => {

  const [image, setImage] = useState(1);

  const handleMouseEnter = (e) =>{
    e.target.classList.add('active')
    setImage(Number(e.target.id))
  }
  const handleMouseLeave = (e) =>{
    e.target.classList.remove('active')
  }
  return (
    <div className="product-categories">
        <div className="centerContainer">
          <div className="cate-options">
            <p className="title">Shop <br />by Categories</p>
            <div className="cate-options">
              <div className='option' id='0'  onMouseEnter={(event)=>handleMouseEnter(event)} onMouseLeave={(event)=>handleMouseLeave(event)}>
                <p>All Glasses</p>
              </div>

              <div className="option" id='1' onMouseEnter={(event)=>handleMouseEnter(event)} onMouseLeave={(event)=>handleMouseLeave(event)}>
                <p>Women&apos;s Glasses</p>
              </div>

              <div className="option" id='2' onMouseEnter={(event)=>handleMouseEnter(event)} onMouseLeave={(event)=>handleMouseLeave(event)}>
                <p>Men&apos;s  Glasses</p>
              </div>

              <div className="option" id='3' onMouseEnter={(event)=>handleMouseEnter(event)} onMouseLeave={(event)=>handleMouseLeave(event)}>
                <p>Eco-friendly</p>
              </div>

              <div className="option" id='4' onMouseEnter={(event)=>handleMouseEnter(event)} onMouseLeave={(event)=>handleMouseLeave(event)}>
                <p>Street Style</p>
              </div>

            </div>
          </div>
          <div className="cate-images">
            <div className="image">
              <img src={Data.ImgArr[image]} alt="hover-images" />
            </div>
          </div>
        </div>
      </div>
  )
}
