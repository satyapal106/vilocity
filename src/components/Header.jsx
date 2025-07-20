import { NavLink, Link, useNavigate } from 'react-router-dom'

import logo from '../assets/logo/velocity-logo1.png';
import '../style/header.scss'
import toast from 'react-hot-toast';
import { useContext, useEffect, useRef, useState } from 'react';
import { SignInContext } from '../App';


export const Header = () => {

  const [navShadow, setShadow] = useState(false);
  window.addEventListener('scroll', ()=>{
    setShadow(window.pageYOffset >= 40 ? true : false)
  })

  const navigate = useNavigate();

  const [signedIn, setSignedIn] = useContext(SignInContext)

  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () =>{
    sessionStorage.clear();
    setSignedIn(false)
    navigate('/')
    toast.success('Successsfully Logged-Out');
  }

  const searchRef = useRef();
  
  useEffect(()=>{
    searchRef.current.focus();
  }, [showSearch])

  const handleClearSearch = ()=>{
    searchRef.current.value = '';
    searchRef.current.focus();
  }

  return (
    <nav className={`${navShadow ? 'shadow' : ''}`}>
      <div className="theHeader">
        <div className="navLogo">
          <NavLink to='/'>
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div className="navItems">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/aboutUs'>About Us</NavLink>
          <NavLink to='/partnerUs'>Partner With Us</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
          <NavLink to='/faq'>FAQ</NavLink>

          <NavLink to='/contact'>Contacts</NavLink>
        </div>

        <div className="navButtons">
          
          <div className="search" onClick={()=>setShowSearch(!showSearch)}>
            <i className="bi bi-search"></i>
          </div>
          
          <div className="hamburgerMenu">
            <i className="bi bi-list"></i>
          </div>

          <p className={`login ${signedIn ? 'hidden' : ''}`}><NavLink  to='/login'>Login<i className="bi bi-person-add"></i></NavLink></p>

          <div className={`navUtilButtons ${signedIn ? '': 'hidden'}`}>
            <NavLink to="/userProfile"><i className="bi bi-person"></i></NavLink>
            <NavLink to="/wishlist"><i className="bi bi-heart"></i></NavLink>
            <NavLink to="/cart"><i className="bi bi-bag"></i></NavLink>
            <i onClick={handleLogout} className="bi bi-box-arrow-right"></i>
          </div>
          


        </div>

      </div>

      <div className={`searchBar ${showSearch ? 'searchBarShow': ''}`}>
        <div className="search-input">
          <div className="border-bottom">
            <input type="text" placeholder='Search...' ref={searchRef} /><i className="bi bi-x-lg" onClick={handleClearSearch}></i>
          </div>
          <div className="search-search">Search</div>
        </div>
      </div>
    </nav>
  )
}
