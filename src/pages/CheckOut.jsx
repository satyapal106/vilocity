import toast from 'react-hot-toast';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/checkout.scss'
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/glass1.jpg';

export const CheckOut = () => {
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

    const subtotal = cartdata.reduce((sum, item) => {
        const price = item.product_salePrice ? item.product_salePrice : item.product_price;
        return sum + parseFloat(price) * item.product_qty;
    }, 0);

    const userData = JSON.parse(sessionStorage.getItem('User'))[0];

    const navigate = useNavigate()

    const [warning, setWarning] = useState(false);
    const [pay, setPay]=useState(false);

    const proceedPay = (event) =>{
        event.preventDefault();
        if(pay){
            toast.success('Thank you for your order, will get back to you soon!!', {duration:5000})
            navigate('/')
        }else{
            setWarning(true);
        }
    }

    

  return (
    <>
        <div className="checkout">

        <div className="address-payment">
                <div className="address">
                    <p className='checkout-title'><i className="bi bi-truck"></i> Shipping Address </p>
                    
                    <p className='pin'><i className="bi bi-geo-alt-fill"></i> Pincode <span className='address-option'>Change Address</span></p>
                    <div className="address-details">
                        <p className='strong'>{userData.name}</p>
                        <p className='soft-text'>{userData.address}</p>
                        <p className='soft-text'>Pincode</p>
                        <p className='soft-text'>{userData.email}</p>
                    </div>

                    <div className="edit-add-address">
                        <p className='soft-text'><Link to={''}>Edit</Link> <span>-</span> <Link to={''}>Add Address</Link></p>
                    </div>
                </div>
                <div className="cart-underline"></div>

                <div className="payment">
                    <p className='checkout-title'><i className="bi bi-credit-card"> </i>Payment Method</p>
                    <div className="coupen">
                        <p className='soft-text'>Have a coupan code?</p>
                        <div className="coupen-input">
                            <input type="text" />
                            <button className='primary-btn'>Apply</button>
                        </div>
                    </div>
                    
                    <p className='strong'>Choose Payment Method</p>
                    <div className="payment-methods">
                        <form action="">
                            <div className="form-items">
                                <div className="payment-input">
                                    <input type="radio" id='phonePay' name='payment_method' onClick={()=>setPay(true)}/>
                                    <label htmlFor="phonePay" onClick={()=>setPay(true)}>Phone Pay</label>
                                </div>
                                <div className="payment-input">
                                    <input type="radio" id='cod' name='payment_method' onClick={()=>setPay(true)}/>
                                    <label htmlFor="cod" onClick={()=>setPay(true)}>Cash On Delivery</label>
                                </div>
                            </div>

                            <div className="allow-payment">
                                <p className={warning ? 'warning-show':'warning'}>*Please select a payment method.*</p>
                                <button type='submit' className='primary-btn' onClick={proceedPay}>Proceed to Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="order-summery">
                <p className="checkout-title"><i className="bi bi-bag-check"></i> Your Order Summary</p>
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
                                            <p className='strong'>Rs. {parseFloat(item.product_qty) * parseFloat(item.product_salePrice ? item.product_salePrice : item.product_price)}</p>
                                        </div>
                                        <p className='soft-text'>Quantity: 1</p>
                                        <p className='soft-text'>{item.product_category}</p>
                                        <p className='soft-text'>{item.product_subcategory}</p>

                                    </div>
                                </div>
                                <div className="cart-underline"></div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-total">
                    <p className='strong'>Sub-Total: <span>Rs. {subtotal}</span></p>
                    <p className='strong'>Coupan: <span>-</span></p>
                    <p className='strong'>Gst: <span>-</span></p>
                    <div className="cart-underline"></div>
                    <p className='strong'>Total: <span>Rs. {subtotal}</span></p>
                </div>
            </div>
        </div>

    </>
  )
}
