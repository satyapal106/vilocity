import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound, AboutUs, Shop, Registration, Login, Cart, 
  UserProfile, WishList, PartnerUs, CheckOut, PartnerScheme, ContactUs, 
  Blogs, FAQ, BlogSingle ,ProductSingle} from '../pages/index';
import { TestPage } from '../pages/TestPage';
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/product/:id" element={<ProductSingle/>}/>
      <Route path='/partnerUs' element={<PartnerUs/>}/>
      <Route path='/partnerScheme' element={<PartnerScheme/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/single-blog/:id' element={<BlogSingle/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/userProfile" element={<UserProfile/>}/>

      <Route path='/checkout' element={<CheckOut/>}/>

      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>}/>


      <Route path='/test' element={<TestPage/>} />
    </Routes>
  )
}
