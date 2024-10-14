import { useState } from 'react';
import Footer from './component/Home/Footer/Footer';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Accessibility from './component/Home/Footer/Support/Accessibility';
import Accessories from './component/Home/Footer/Shop/Accessories';
import Apparel from './component/Home/Footer/Shop//Apparel';
import Art from './component/Home/Footer/Shop/Art'
import Collectibies from './component/Home/Footer/Shop//Collectibles';
import CollectabilityGuide from './component/Home/Footer/Support/CollectabilityGuide';
import GiftCardBalance from './component/Home/Footer/Support/GiftCardBalance';
import OrderStatus from './component/Home/Footer/Support/OrderStatus';
import ShippingInformation from './component/Home/Footer/Support/ShippingInformation';
import SignUp from '../src/component/Auth/SignUp/SignUp';
function App() {

  return (
    <>
      {/* <div className='Footer'>
        <Routes>
          <Route path='/accessories' element={<Accessories/>}></Route>
          <Route path='/apparel' element={<Apparel/>}></Route>
          <Route path='/art' element={<Art/>}></Route>
          <Route path='/collectibles' element={<Collectibies/>}></Route>
          <Route path='/accessibility' element={<Accessibility/>}></Route>
          <Route path='/collectabilityGuide' element={<CollectabilityGuide/>}></Route>
          <Route path='/giftCardBalance' element={<GiftCardBalance/>}></Route>
          <Route path='/orderStatus' element={<OrderStatus/>}></Route>
          <Route path='/shippingInformation' element={<ShippingInformation/>}></Route>
        </Routes>
        <Footer/>
      </div> */}
    </>
  )
}

export default App
