import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Support/NavSupport.css'
const NavSupport = () => {
  const location = useLocation();
  const handleClick = (path) => {
    setActiveLink(path);
  }
  return (
    <div className='nav-support'>
      <div className='nav-support-main'>
        <div className='nav-support-title-container'>
          <h1 className='title-h1' >Support</h1>
        </div>
        <div className='nav-support-background'>
          <div className='nav-support-teemo-background'></div>
        </div>
        <div className='nav-support-hero-container'>
          <div className='nav-support-hero-tag'>
            <Link className={`hero-tags-a ${location.pathname === '/accessibility' ? 'active' : ''}`}
                  to='/accessibility'
                  onClick={() => handleClick('/accessibility')}>
              <span className={`hero-tag-span ${location.pathname === '/accessibility' ? 'active' : ''}`}>Accessibility</span></Link>
            <Link className={`hero-tags-a ${location.pathname === '/collectabilityGuide' ? 'active' : ''}`}
                  to='/collectabilityGuide'
                  onClick={() => handleClick('/collectabilityGuide')}>
              <span className={`hero-tag-span ${location.pathname === '/collectabilityGuide' ? 'active' : ''}`}>Collectability Guide</span></Link>
            <Link className={`hero-tags-a ${location.pathname === '/giftCardBalance' ? 'active' : ''}`}
                  to='/giftCardBalance'
                  onClick={() => handleClick('/giftCardBalance')}>
            <span className={`hero-tag-span ${location.pathname === '/giftCardBalance' ? 'active' : ''}`}> Gift Card Balence</span></Link>
            <Link className={`hero-tags-a ${location.pathname === '/orderStatus' ? 'active' : ''}`}
                  to='/orderStatus'
                  onClick={() => handleClick('/orderStatus')}>
              <span className={`hero-tag-span ${location.pathname === '/orderStatus' ? 'active' : ''}`}> Order Status / Code Lookup</span>
            </Link>
            <Link className={`hero-tags-a ${location.pathname === '/shippingInformation' ? 'active' : ''}`}
                  to='/shippingInformation'
                  onClick={() => handleClick('/shippingInformation')}
            >
              <span className={`hero-tag-span ${location.pathname === '/shippingInformation' ? 'active' : ''}`}>Shipping Estimated Arrival Times </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavSupport
