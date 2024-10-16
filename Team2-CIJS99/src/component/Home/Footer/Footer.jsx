import React from 'react';
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-background'>
        <div className='footer-container'>
          <div className='footer-logo'>
           <Link to='/'><img src="/img/logo.png" alt="logo" style={{ width: "80px" }} /></Link> 
          </div>
          <div className='footer-shop'>
            <span className='footer-shop-name'>Shop</span>
            <ul className='footer-shop-ul'>
              <li className='footer-shop-li'>
                <Link className='footer-shop-link' to="/apparel">APPAREL</Link>
              </li>
              <li className='footer-shop-li'>
                <Link className='footer-shop-link' to="/collectibles">COLLECTIBLES</Link>
              </li>
              <li className='footer-shop-li'>
                <Link className='footer-shop-link' to="/art">ART</Link>
              </li>
              <li className='footer-shop-li'>
                <Link className='footer-shop-link' to="/accessories">ACCESSORIES</Link>
              </li>
            </ul>
          </div>
          <div className='footer-support'>
            <span className='footer-support-name'>Support</span>
            <ul className='footer-support-ul'>
              <li className='footer-support-li'>
                <Link className='footer-support-link' to="/orderStatus">ORDER STATUS</Link>
              </li>
              <li className='footer-support-li'>
                <Link className='footer-support-link' to="/giftCardBalance">GIFT CARD BALANCE</Link>
              </li>
              <li className='footer-support-li'>
                <Link className='footer-support-link' to="/shippingInformation">SHIPPING INFORMATION</Link>
              </li>
              <li className='footer-support-li'>
                <Link className='footer-support-link' to="/collectabilityGuide">COLLECTABILITY GUIDE</Link>
              </li>
              <li className='footer-support-li'>
                <Link className='footer-support-link' to="/accessibility"> ACCESSIBILITY</Link>
              </li>
            </ul>
          </div>
          <div className='footer-contactUs'>
            <span className='footer-contactUs-name'>Contact Us</span>
            <div className='footer-contactUs-fields'>
              <div className='footer-contactUs-fields-container'>
                <label className='contactUs-fields-name'>
                  <p className='contactUs-p-name'>Name</p>
                  <input className='contactUs-inp-name' type='text' />
                </label>
                <label className='contactUs-fields-email'>
                  <p className='contactUs-p-email'>Email Address*</p>
                  <input className='contactUs-inp-email' type='text' />
                </label>
                <label className='contactUs-fields-order'>
                  <p className='contactUs-p-order'>Order Number</p>
                  <input className='contactUs-inp-order' type='text' />
                </label>
                <label className='contactUs-fields-country'>
                  <p className='contactUs-p-country'>Country</p>
                  <input className='contactUs-inp-country' type='text' />
                </label>
                <label className='contactUs-fields-tracking'>
                  <p className='contactUs-p-tracking'>Tracking Number</p>
                  <input className='contactUs-inp-tracking' type='text' />
                </label>
                <label className='contactUs-fields-subject'>
                  <p className='contactUs-p-subject'>Subject*</p>
                  <input className='contactUs-inp-subject' type='text' />
                </label>
                <label className='contactUs-fields-help'>
                  <p className='contactUs-p-help'>How can we help*</p>
                  <input className='contactUs-inp-help' type='text' />
                </label>
                <div className='contactUs-submit' type='submit'>
                  <button className='contactUs-button'>
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-contact'>
          <div className='footer-contact-left'>
            <p className='contact-left-p'>Copyright Riot Games 2024</p>
          </div>
          <div className='footer-contact-right'>
            <Link className='contact-link' to='/legal'>LEGAL</Link>
            <Link className='contact-link' to='/legal'>COOKIE PREFERENCES</Link>
            <Link className='contact-link' to='/legal'>TERMS & CONDITIONS</Link>
            <Link className='contact-link' to='/legal'>PRIVACY POLICY</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
