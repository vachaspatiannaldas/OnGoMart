import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './Components/Pages/Description';
import Index from './Components/Pages/Index';
import Login from './Components/Pages/Login';
import ProductDesc from './Components/Pages/ProductDesc';
import Shopgrid from './Components/Pages/Shopgrid';
import Register from './Components/Pages/Register';
import Cart from './Components/Pages/Cart';
import Checkout from './Components/Pages/Checkout';
import Category from './Components/Pages/Category';
import Contact from './Components/Pages/Contact';
import Wishlist from './Components/Pages/Wishlist';
import Ordertrack from './Components/Pages/Ordertrack';

import Tab from './Components/Pages/Tab';
function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/shop" element={<Shopgrid/>}/>
    <Route path='/description/:id' element={<ProductDesc/>}/>
    <Route path='/desc' element={<Description/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/registration" element={<Register/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/category/:id" element={<Category />} />
    <Route path="/subcategory/:id" element={<Category />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/ordertrack" element={<Ordertrack />} />

    <Route path="/tab" element={<Tab/>}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
