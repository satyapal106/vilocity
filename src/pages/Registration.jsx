// title
import { useState ,useContext} from 'react';
import {useTitle} from '../hooks/useTitle';

import { NavLink, useNavigate } from "react-router-dom"
import axios from 'axios';
import toast from 'react-hot-toast';
import { SignInContext } from "../App";

export const Registration = () => {

  useTitle('Registration | Velocity Opticals');

  const [signedIn, setSignedIn] = useContext(SignInContext)

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyType , setcompanyType] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pancard, setPancard] = useState('');
  const [gst, setGst] = useState('');
  const [tan, setTan] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pocName, setPocName] = useState('');
  const [pocNumber, setPocNumber] = useState('');
  const [dealer, setDealer] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [password, setPassword] = useState('');

  //error message state
  const [inputErrorList, setInputErrorList] = useState({})  

  const handleSubmit = (e)=>{
    e.preventDefault();

    // setInputErrorList({});

    const data = {
      name:name, 
      company_name:companyName, 
      phone_number:phone, 
      email:email, 
      address:address, 
      company_type:companyType, 
      pan_card_id:pancard, 
      GST_no:gst, 
      tan:tan, 
      aadhar:aadhar, 
      POC_name:pocName, 
      POC_number:pocNumber, 
      Applying_for:dealer, 
      credit_limit:creditLimit, 
      password:password
    }
    
    axios.post('https://faradic.codtrees-dev.cloud/api/registervelocity', data ).then((res)=>{
        setName('');
        setCompanyName('');
        setcompanyType('');
        setAddress('');
        setPhone('');
        setEmail('');
        setPancard('');
        setGst('');
        setTan('');
        setAadhar('');
        setPocName('');
        setPocNumber('');
        setDealer('');
        setCreditLimit('');
        setPassword('');

        sessionStorage.clear()
        // sessionStorage.setItem('email',email);
        // sessionStorage.setItem('name',name);
        // sessionStorage.setItem('password', password);

        sessionStorage.setItem('User',JSON.stringify(res.data.User));
        setSignedIn(true);

        toast.success(res.data.message)

        navigate('/userProfile')
      }).catch((error)=>{
        if(error.response){
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
        toast.error("Registration Unsuccessfull",{duration: 5000})
        console.log(error.response.data.errors);
      })

  }


  return (
    <div className="registration">
      <div className="logo"></div>
      <div className="form-content">
      <form className="theForm" onSubmit={handleSubmit}>
        <div className="title">Partner With Us</div>

        <div className="input-box">
          <input type="text" name='name' onChange={e=>setName(e.target.value)} value={name} required/>
          <label>Full Name<span className='text-danger'>{inputErrorList.name}</span></label>
        </div>      

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='number' onChange={e=>setPhone(e.target.value)} value={phone} required/>
            <label>Number <span className='text-danger'>{inputErrorList.phone_number}</span></label>
          </div>        

          <div className="input-box">
            <input type="email" name='email' onChange={e=>setEmail(e.target.value)} value={email} required/>
            <label>Email <span className='text-danger'>{inputErrorList.email}</span></label>  
          </div>   
        </div>    
        
        <div className="input-box">
          <input type="text" name='companyName' onChange={e=>setCompanyName(e.target.value)} value={companyName} required/>
          <label>Company Name <span className='text-danger'>{inputErrorList.company_name}</span></label>
        </div>           

        <div className="input-box">
          <input type="text" name='companyType' onChange={e=>setcompanyType(e.target.value)} value={companyType} required/>
          <label>Company Type <span className='text-danger'>{inputErrorList.company_type}</span></label>
        </div>        

        <div className="input-box">
          <input type="text" name='address' onChange={e=>setAddress(e.target.value)} value={address} required/>
          <label>Address <span className='text-danger'>{inputErrorList.address}</span></label>
        </div>        

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='Pan Card' onChange={e=>setPancard(e.target.value)} value={pancard} required/>
            <label>Pancard <span className='text-danger'>{inputErrorList.pan_card_id}</span></label>
          </div>        

          <div className="input-box">
            <input type="text" name='gst' onChange={e=>setGst(e.target.value)} value={gst} required/>
            <label>GST <span className='text-danger'>{inputErrorList.GST_no}</span></label>
          </div>  
        </div>      

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='tan' onChange={e=>setTan(e.target.value)} value={tan} required/>
            <label>Tan <span className='text-danger'>{inputErrorList.tan}</span></label>
          </div>        

          <div className="input-box">
            <input type="text" name='aadhar' onChange={e=>setAadhar(e.target.value)} value={aadhar} required/>
            <label>AAdhar <span className='text-danger'>{inputErrorList.aadhar}</span></label>
          </div>        
        </div>

        <div className="input-box-divide">
          <div className="input-box">
            <input type="text" name='pocNumber' onChange={e=>setPocName(e.target.value)} value={pocName} required/>
            <label>POC(Point of Contact) Name <span className='text-danger'>{inputErrorList.POC_name}</span></label>
          </div>        

          <div className="input-box">
            <input type="text" name='pocNumber' onChange={e=>setPocNumber(e.target.value)} value={pocNumber} required/>
            <label>POC(Point of Contact) Number <span className='text-danger'>{inputErrorList.POC_number}</span></label>
          </div>        
        </div>

        <div className="input-box-divide">
          <div className="input-box">
            <span className='text-danger'>{inputErrorList.Applying_for}</span>
            <select name="" id="" onChange={e=>setDealer(e.target.value)} value={dealer}>
              <option value="--select role for applying--">--select role applying for--</option>
              <option value="Dealer">Dealer</option>
              <option value="Direct Dealer">Direct Dealer</option>
              <option value="Distributer">Distributer</option>
            </select>
          </div>     

          <div className="input-box">
            <input type="number" min="0" max="300000" name='creditLimit' onChange={e=>setCreditLimit(e.target.value)} value={creditLimit} required/>
            <label>Credit Limit <span className='text-danger'>{inputErrorList.credit_limit}</span></label>
          </div>   
        </div>    
        <div className="input-box">
            <input type="password" name='creditLimit' onChange={e=>setPassword(e.target.value)} value={password} required/>
            <label>Password <span className='text-danger'>{inputErrorList.password}</span></label>
          </div>   

        <div className="otherStuff">
          <div className="others">
            <NavLink to='/login'>Already have an account? Lets go!!</NavLink>
          </div>    

          <div className="errors">
            <span className='text-danger'>{inputErrorList.name}</span>
            <span className='text-danger'>{inputErrorList.phone_number}</span>
            <span className='text-danger'>{inputErrorList.email}</span>
            <span className='text-danger'>{inputErrorList.company_name}</span>
            <span className='text-danger'>{inputErrorList.company_type}</span>
            <span className='text-danger'>{inputErrorList.address}</span>
            <span className='text-danger'>{inputErrorList.pan_card_id}</span>
            <span className='text-danger'>{inputErrorList.GST_no}</span>
            <span className='text-danger'>{inputErrorList.tan}</span>
            <span className='text-danger'>{inputErrorList.aadhar}</span>
            <span className='text-danger'>{inputErrorList.POC_name}</span>
            <span className='text-danger'>{inputErrorList.POC_number}</span>
            <span className='text-danger'>{inputErrorList.Applying_for}</span>
            <span className='text-danger'>{inputErrorList.credit_limit}</span>
            <span className='text-danger'>{inputErrorList.password}</span>
          </div>
        </div>

        <button className="primary-btn" type='submit'>Register</button>
      </form>
      </div>
    </div>
  )
}
