import { Link } from "react-router-dom"

export const AboutUs = (Data) => {
  return (
    <div className="centerContainer">
        <div className="aboutUs">
        <img src={Data.Img} alt="about-us" />
          <div className="aboutUs-content">
            <p className="title">About us</p> 
            <p className="p-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&aspos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lore
              m Ipsum.</p>

              <Link to={'/aboutUs'} className="primary-btn">Know more</Link>
          </div>
        </div>
      </div>
  )
}
