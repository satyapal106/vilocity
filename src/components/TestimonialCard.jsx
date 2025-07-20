import messengerImg from '../assets/images/user.jpg';

export const TestimonialCard = () => {
  return (
    <div className="testimonialCard">
      <div className="rating">
        <i className="bi bi-star-fill star"></i>
        <i className="bi bi-star-fill star"></i>
        <i className="bi bi-star-fill star"></i>
        <i className="bi bi-star-fill star"></i>
        <i className="bi bi-star star"></i>
      </div>
      <div className="message">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&quots;s standard dummy text ever since the 1500s
      </div>
      <div className="messenger">
        <div className="image">
          <img src={messengerImg} alt="" />
        </div>
        <div className="user">
          <p className='name'>Tanisha Mangar</p>
          <p className='role'>User</p>
        </div>
      </div>
    </div>
  )
}
