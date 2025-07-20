import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {useTitle} from '../hooks/useTitle';
import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { SignInContext } from "../App";

export const Login = () => {
  useTitle('Login | Velocity Opticals')

  const [signedIn, setSignedIn] = useContext(SignInContext)

  const navigate = useNavigate();

  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(emailRef.current.value, passwordRef.current.value);

    axios.post('https://faradic.codtrees-dev.cloud/api/login', {email:emailRef.current.value, password:passwordRef.current.value}).then((res)=>{
      console.log(res);
      sessionStorage.clear()

      // sessionStorage.setItem('email',emailRef.current.value);
      // sessionStorage.setItem('password', passwordRef.current.value);
      sessionStorage.setItem('User',JSON.stringify(res.data.User));

      emailRef.current.value = "";
      passwordRef.current.value = "";
      toast.success("Login Successfull!!",{ duration: 5000});

      // setSignedIn(true)
      navigate('/userProfile')
      setSignedIn(true)
    }).catch((error)=> {
      toast.error("Login Unsuccessfull",{ duration: 5000});
      console.log(error.message)
    });
  }


  return (
    <div className="registration">
      <div className="logo"></div>
      <div className="form-content">
      <form className="theForm" onSubmit={handleSubmit}>
        <div className="title">Login From</div>
        <div className="input-box">
          <input type="text" id="email" autoComplete="false" ref={emailRef} required/>
          <label>Email</label>
        </div>
        <div className="input-box">
          <input type="password" ref={passwordRef} required/>
          <label>Password</label>
        </div>

        <div className="otherStuff">
          <div className="others">
            <input type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me.</label>
          </div>
          <div className="others">
            <NavLink to='/login'>Forgot password?</NavLink>
          </div>
          <div className="others">
            <NavLink to='/registration'>Create Account.</NavLink>
          </div>
        </div>

        <button className="primary-btn" type="submit">Login</button>
        {/* {isValid !== null && (
          <p className='validate-message' style={{ color: isValid ? 'green' : 'red' }}>
            {isValid ? 'Your enquiry has been sent!' : 'Please enter a valid email.'}
          </p>
        )} */}
      </form>
      </div>
    </div>
  )
}
