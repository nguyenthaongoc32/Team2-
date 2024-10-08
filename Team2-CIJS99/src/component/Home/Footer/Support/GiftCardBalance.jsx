import React from 'react'
import NavSupport from './NavSupport'
import '../Support/GiftCardBalance.css'
const GiftCardBalance = () => {
  return (
    <div>
      <NavSupport/>
      <div className='gift-title-wrapper'
        style={{ display: "grid", padding: "0 2rem", justifyItems: "center", borderBottom:"1px soild #d0d0d0" }}>
        <h2 className='gift-title-h2'>gift card balance</h2>
      </div>
      <div className='gift-content-wrapper'>
        <section className='gift-form'>
          <div className='gift-form-input'>
            <label className='characters'>
              <p className='characters-p' >Last 4 Characters</p>
              <input className='characters-inp' type='text'/>
            </label>
            <label className='email' >
              <p className='email-p' >Email Address</p>
              <input className='email-inp' type='text'/>
            </label>
          </div>
          <button className='check-button' type='submit'>CHECK BALANCE</button>
        </section>
      </div>
    </div>
  )
}

export default GiftCardBalance
