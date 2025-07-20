import sideImg from '../../../assets/images/img9.jpg';
import { useState } from 'react';


export const EnquireForm = () => {
  
  const [enquire, setEnquire] = useState({});
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email.trim()));      
    const theEmail = document.getElementById('email');
    if(isValid === false){
      theEmail.focus();
      theEmail.style.borderColor = "red";
      console.log(isValid);
      return false
    }else{
      theEmail.style.borderColor = "#8F9992";
      console.log(isValid);
      return true
    }  
  };

  function handeSubmit(event){
    event.preventDefault();
    if(validateEmail()){
      setEnquire({
        name :  event.target.name.value,
        email : event.target.email.value,
        number : event.target.number.value,
        message : event.target.message.value
      });
  
      event.target.name.value = null;
      event.target.email.value = null;
      event.target.number.value = null;
      event.target.message.value = null;
  
      console.log(enquire);
    }
  }  

  return (
    <div className="centerContainer">
      <div className="enquire-box">
        <div className="enquire-img">
          <img src={sideImg} alt="" />
        </div>
        <form onSubmit={handeSubmit} className="theForm">
          <p className="title">Enquire Form</p>
          <div className="input-box">
            <input type="text" name='name' required/>
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="text" id="email" name='email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="number" name='number' required/>
            <label>Number</label>
          </div>
          <div className="input-box-divide">
            <div className="input-box">
              <input type="number" name='zipcode' required/>
              <label>Zipcode</label>
            </div>

            <div className="input-box">
              <select name="" id="">
                <option value="">--select role--</option>
                <option value="">Dealer</option>
                <option value="">Direct Dealer</option>
                <option value="">Distributer</option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <textarea name="message" id="message" cols="10" rows="3" placeholder='Message'></textarea>
            {/* <label htmlFor="message">Message</label> */}
          </div>

          <button className="enquire-btn">Submit</button>
          {isValid !== null && (
            <p className='validate-message' style={{ color: isValid ? 'green' : 'red' }}>
              {isValid ? 'Your enquiry has been sent!' : 'Please enter a valid email.'}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
