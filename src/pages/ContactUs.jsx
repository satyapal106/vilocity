import { useState } from 'react';
import '../style/contactUs.scss';

export const ContactUs = () => {
    
  const [enquire, setEnquire] = useState({});
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email.trim()));
    const theEmail = document.getElementById('email');
    if (isValid === false) {
      theEmail.focus();
      theEmail.style.borderColor = "red";
      console.log(isValid);
      return false
    } else {
      theEmail.style.borderColor = "#8F9992";
      console.log(isValid);
      return true
    }
  };

  function handeSubmit(event) {
    event.preventDefault();
    if (validateEmail()) {
      setEnquire({
        name: event.target.name.value,
        email: event.target.email.value,
        number: event.target.number.value,
        message: event.target.message.value
      });

      event.target.name.value = null;
      event.target.email.value = null;
      event.target.number.value = null;
      event.target.message.value = null;

      console.log(enquire);
    }
  }

  return (
    <div className="contact-us-container">
        <header>
            <h1 className='App-header'>Contact</h1>
        </header>

        <map>
            <iframe width="100%" height="400" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lastminute.com%20London%20Eye+(lastminute.com%20London%20Eye)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">
                Calculate population in area
            </a>
            </iframe>
        </map>

        <main>
            <form onSubmit={handeSubmit} className="theForm">
                <p className="title">Get In Touch</p>
                <div className="input-box">
                    <input type="text" name='name' required />
                    <label>Name</label>
                </div>
                <div className="input-box">
                    <input type="text" id="email" name='email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="number" name='number' required />
                    <label>Number</label>
                </div>
                <div className="input-box">
                    <select name="" id="">
                        <option value="">--select role--</option>
                        <option value="">Dealer</option>
                        <option value="">Direct Dealer</option>
                        <option value="">Distributer</option>
                    </select>
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
        </main>

        <aside>
            <div className='contact-categories'>
                <div className='headcontainer'>
                    <h4>Address</h4>
                </div>
                <div className='bodycontainer'>
                    <p>14 LE Gounlburn St, Sydney 1198NSA.</p>
                </div>
            </div>

            <div className="contact-categories">
                <div className='headcontainer'>
                    <h4>Phone</h4>
                </div>
                <div className='bodycontainer'>
                    <p>(+089) 19918989</p>
                </div>
            </div>

            <div className="contact-categories">
                <div className='headcontainer'>
                    <h4>Email</h4>
                </div>
                <div className='bodycontainer'>
                    <p>support@domain.com</p>

                </div>
            </div>

            <div className="contact-categories">
                <div className='headcontainer'>
                    <h4>Opening Time</h4>
                </div>
                <div className='bodycontainer'>
                    <p>8:00Am – 10:00Pm, Sunday Close</p>
                </div>
            </div>

            <div className="contact-categories">
                <div className='headcontainer'>
                    <h4>Socials</h4>
                </div>

                <div className="bodycontainer">
                    <ul className='social'>
                        <li>
                            <a className="icons" href=''>
                            <i className="bi bi-twitter-x"></i>
                            </a>
                        </li>
                        <li>
                            <a className="icons" href=''>
                            <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a className="icons" href=''>
                            <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a className="icons" href=''>
                            <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        
    </div>
  )
}
