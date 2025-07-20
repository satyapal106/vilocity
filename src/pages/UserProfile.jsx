import { useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import '../style/UserProfile.scss'


export const UserProfile = () => {

  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('User')));
  
  useTitle(`${data[0].name} | Velocity Opticals'`)

  return (
    <div className="userProfile">
      <div className="userDetails">
        <p className="greetings">Hello, {data[0].name}</p>

        <div className="message">
          <p>Your account is under review.</p>
        </div>

        <div className="userChatSection">

          <p className='live-chat-message'>*Live chat is disabled right now.*</p>
          <div className="chat">
            <div className="messages">
              <div className="messages-content">
                <div className="msg admin">
                  <p className="messenger">Admin, </p>
                    <div className="msg-chat">
                      <p className="">Please submit a scanned copy of your pan and aadhar documents!</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="message-box">
              <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
              <button type="submit" className="message-submit">Send</button>
            </div>
          </div>
          <div className="overlay">

          </div>
      </div>

      </div>
      <div className="userCreds">
        <h1 className='title'>User Info. <Link to=""><i className="bi bi-pencil-square"></i></Link></h1>
          <div className="credsGrid">
            <p>Name:</p>
            <span>{data[0].name}</span>
          </div>

          <div className="credsGrid">
            <p>Email </p>
            <span>{data[0].email}</span>
          </div>
          <div className="credsGrid">
            <p>Phone: </p><span>{data[0].phone_number}</span>
          </div>
          <div className="credsGrid">
          <p>Company Name: </p><span>{data[0].company_name}</span>
          </div>
          <div className="credsGrid">
          <p>Company Type: </p><span>{data[0].company_type}</span>
          </div>
          <div className="credsGrid">
            <p>Address: </p><span>{data[0].address}</span>
          </div>
          <div className="credsGrid">
          <p>PanCard: </p><span>{data[0].pan_card_id}</span>
          </div>
          <div className="credsGrid">
          <p>GST Number: </p><span>{data[0].GST_no}</span>
          </div>
          <div className="credsGrid">
          <p>TAN: </p><span>{data[0].tan}</span>
          </div>
          <div className="credsGrid">
          <p>Aadhar: </p><span>{data[0].aadhar}</span>
          </div>
          <div className="credsGrid">
          <p>POC Name: </p><span>{data[0].POC_name}</span>
          </div>
          <div className="credsGrid">
          <p>POC Number: </p><span>{data[0].POC_number}</span>
          </div>
          <div className="credsGrid">
          <p>Applying For: </p><span>{data[0].Applying_for}</span>
          </div>
          <div className="credsGrid">
          <p>Credit Limit: </p><span>{data[0].credit_limit}</span>
          </div>
        </div>
    </div>
  )
}
