import React, { useEffect, useState } from 'react';
import { Header, Footer } from './components';
import {AllRoutes} from './routes/AllRoutes';
import './style/Primary.scss';

export const SignInContext = React.createContext();


function App() {

  const [signedIn, setSignedIn] = useState(false)

  // console.log(sessionStorage.getItem('User'));

  useEffect(()=>{
    sessionStorage.length === 0 ? setSignedIn(false) : setSignedIn(true)

  },[])

  return (
    <SignInContext.Provider value={[signedIn, setSignedIn]}>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </SignInContext.Provider>
  )
}

export default App
