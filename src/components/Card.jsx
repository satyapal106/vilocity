import toast from "react-hot-toast";
import axios from 'axios';
import glass from '../assets/images/glass1.jpg';
import { Link } from "react-router-dom";

export const Card = (data) => {

  const handleIconCart = (e) => {
    e.preventDefault();
    const pid = e.currentTarget.getAttribute('data-id');
    const product_qty = "1";
    const user_details = JSON.parse(sessionStorage.getItem("User"));
    const user_id = user_details[0].id;
    console.log(user_details[0].id);
    
    // Perform any additional logic with productId if needed

    // Example Axios POST request
    axios.post('https://faradic.codtrees-dev.cloud/api/cart/add', { pid , product_qty , user_id})
      .then(response => {
        console.log('Add to cart successful:', response.data);
        toast.success("Add to cart successful",{ duration: 5000});
        
        // Perform any additional logic after successful post
      })
      .catch(error => {
        toast.error("Item Is Already in the Cart",{ duration: 5000});
        console.error('Error adding to cart:', error.response.data.message);
      })
  };

  const handleIconWhish = (e) => {
    e.preventDefault();
    const pid = e.currentTarget.getAttribute('data-id');
    const user_details = JSON.parse(sessionStorage.getItem("User"));
    const user_id = user_details[0].id;
    console.log(user_details[0].id);
    
    // Perform any additional logic with productId if needed

    // Example Axios POST request
    axios.post('https://faradic.codtrees-dev.cloud/api/wish/add', { pid ,  user_id})
      .then(response => {

        toast.success("Add to WishList successful",{ duration: 5000});
        console.log('Add to WishList successful:', response.data);
        
        // Perform any additional logic after successful post
      })
      .catch(error => {

        toast.error("Item Is Already in the Wishlist",{ duration: 5000});
        console.error('Error adding to Wishlist:',  error.response.data.message);
      })
  };

  return (
    <Link to={`/shop/product/${data.data.id}`}>
      <div className="card">
      <div className="image">
        <a href="">
          <img src={glass} alt="glass1" />
        </a>
        <div className="pop-ups-icons">
          <a href="">
            <div className="icons" data-id={data.data.id} onClick={handleIconWhish}>
              <p className='showOnHover'>WishList</p>
              <i className="bi bi-heart"></i>
            </div>
          </a>
          <a href="">
            <div className="icons" data-id={data.data.id} onClick={handleIconCart}>
              <p className='showOnHover'>Add to Cart</p>
              <i className="bi bi-bag-plus"></i>
            </div>
          </a>
        </div>
      </div>        
      <div className="card-text">
        <p className='product-title'>{data.data.product_name}</p>
        <p className="product-price">Rs. {data.data.product_price}</p>
      </div>
    </div>
    </Link>
  )
}
