import React from 'react'
import NavSupport from './NavSupport'
import '../Support/OrderStatus.css'
const OrderStatus = () => {
  return (
    <div>
      <NavSupport />
      <div className='support-title-wrapper'
        style={{ display: "grid", padding: "0 2rem", justifyItems: "center", borderBottom:"1px soild #d0d0d0" }}>
        <h2 className='support-title-h2'>order status / code lookup</h2>
      </div>
      <div className='support-content-wrapper'>
        <section className='support-form'>
          <div className='support-form-input'>
            <label className='order-number'>
              <p className='order-number-p' >Order Number</p>
              <input className='order-number-inp' type='text'/>
            </label>
            <label className='last-name'>
              <p className='last-name-p' >Billing Last Name</p>
              <input className='last-name-inp' type='text' />
            </label>
            <label className='email' >
              <p className='email-p' >Email Address</p>
              <input className='email-inp' type='text'/>
            </label>
          </div>
          <button className='order-button' type='submit'>FIND MY ORDER</button>
        </section>
      </div>
    </div>
  )
}

export default OrderStatus
