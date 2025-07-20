import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../style/Cart.scss';
import img from '../assets/images/glass1.jpg';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
    const user_details = JSON.parse(sessionStorage.getItem('User'));
    const user_id = user_details[0].id;

    axios.post('https://faradic.codtrees-dev.cloud/api/cartshow', { user_id })
      .then((res) => {
        setcartdata(res.data.cart_data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDec = (id) => {
      axios.post('https://faradic.codtrees-dev.cloud/api/proddec', { id })
        .then((response) => {
          console.log('Decrement', response.data);
          // Update the cartdata state based on the response
          setcartdata((prevCartData) =>
            prevCartData.map((item) =>
              item.id === id && item.product_qty > 1
                ? { ...item, product_qty: item.product_qty - 1 }
                : item
            )
          );
          toast.success("Product Decremented",{ duration: 5000});
        })
        .catch((error) => {
          console.error(error);
          toast.error("Product Cannot Be Less Than 1",{ duration: 5000});
        });
  };

  const handleInc = (id) => {
      axios.post('https://faradic.codtrees-dev.cloud/api/prodinc', { id })
        .then((response) => {
          console.log('Increment', response.data);
          // Update the cartdata state based on the response
          setcartdata((UpdatetData) =>
            UpdatetData.map((item) =>
              item.id === id ? { ...item, product_qty: (parseFloat(item.product_qty) + 1) } : item
            )
          );
  
          toast.success("Product Incremented",{ duration: 5000});
        })
        .catch((error) => {
          console.error(error);
        });
  };

  const handleRemove = (id) => {
      axios.post('https://faradic.codtrees-dev.cloud/api/proddelete', { id })
          .then((response) => {
          console.log('Product Deleted', response.data);
          // Update the cartdata state by excluding the item with the specified ID
          setcartdata((prevCartData) => prevCartData.filter((item) => item.id !== id));

          toast.success('Product Deleted', { duration: 5000 });
          })
          .catch((error) => {
          console.error(error);
          toast.error('Error deleting product', { duration: 5000 });
          });
  };


  const subtotal = cartdata.reduce((sum, item) => {
    const price = item.product_salePrice ? item.product_salePrice : item.product_price;
    return sum + parseFloat(price) * item.product_qty;
  }, 0);
  
  const shipping = 0; // Replace with your shipping cost calculation
  const tax = 0; // Replace with your tax calculation
  const total = subtotal + shipping + tax;

  const navigate = useNavigate();

  const handleCheckOut = ()=>{
    navigate('/checkOut')
  }

return (
  <div className="cartPage">
      <div className="bag">
          <p className="cart-title">Cart</p>
          <div className="cart-items">
            {
                cartdata.length == 0 ? <div className='p-content'>There are no items in your cart.</div> :
                cartdata.map((item, index)=>(
                    <div key={index}>
                        <div className="item" >
                            <img src={img} alt="" />
                            <div className="item-details">
                                <div className="item-flex-details">
                                    <p className='strong'>{item.product_name}</p>
                                    <p className='strong'>Rs. {parseFloat(item.product_qty) * parseFloat(item.product_salePrice ? item.product_salePrice : item.product_price)}/-</p>
                                </div>
                                <p className='soft-text'>Rs. {item.product_salePrice ? item.product_salePrice : item.product_price}/-</p>
                                <p className='soft-text'>{item.product_category}</p>
                                <p className='soft-text'>{item.product_subcategory}</p>

                                <div className="action-buttons">
                                    <div className="quantity">
                                        <p className='strong'>Quantity:</p>
                                        <i className={`bi bi-dash ${item.product_qty == 1 && 'pointer-disable'}`} data-id={item.id} onClick={() => handleDec(item.id)}></i>
                                        <p className='strong'>{item.product_qty}</p>
                                        <i className="bi bi-plus-lg" data-id={item.id} onClick={() => handleInc(item.id)}></i>
                                    </div>
                                    <button className="primary-btn" onClick={() => handleRemove(item.id)}><i className="bi bi-trash"></i> Remove</button>                        
                                </div>
                            </div>
                        </div>
                        <div className="cart-underline"></div>
                    </div>
                ))
            }
          </div>
      </div>

      <div className="summery">
          <p className='cart-title'>Order Summary</p>
          <p className='p-content'>Subtotal: <span>{subtotal != 0 ? `Rs. ${subtotal}`: '-' }</span></p>
          <p className='p-content'>Tax: <span>{tax != 0 ? `Rs. ${tax}`: '-' }</span></p>
          <p className='p-content'>Shipping Charge: <span>{shipping===0 ? 'Free' : shipping}</span></p>
          <div className="cart-underline"></div>
          <p className='p-content strong'>Total: <span>{total != 0 ? `Rs. ${total}`: '-' }</span></p>


          <div className="check-out">
              <button className='primary-btn' onClick={handleCheckOut}>Check Out</button>
          </div>
      </div>
  </div>
)
}
