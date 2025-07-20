import { Link } from 'react-router-dom';
import blogImg from '../assets/images/img3.jpg';

export const BlogCard = () => {
  return (
    <div className="blogCard card">
      <Link to={'/blogs/single-blog/69'}>
        <div className="blogCard-Image">
          <a href="">
            <img src={blogImg} alt="glass1" />
          </a>
        </div>
        <div className="card-text">
          <p className="product-price">12 December, 2024</p>
          <p className='product-title'>Blog Title</p>
        </div>
      </Link>
    </div>
  )
}
