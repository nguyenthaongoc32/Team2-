import React from 'react'
import NavSupport from './NavSupport'
import '../Support/CollectabilityGuide.css'
const CollectabilityGuide = () => {
  return (
    <div>
      <NavSupport />
      <div className='guide-title-wrapper'>
        <h2 className='guide-title-h2'>collectability guide</h2>
      </div>
      <div className='guide-content-wrapper'>
        <div className='guide-main-container'>
          <p className='title-guide'>COLLECTABILITY GUIDE</p> &nbsp;

          <p className='p-guide'>In addition to our standard product development we aim to
            create special and limited products that help you -- the players -- celebrate moments
            and characters in an amplified and meaningful way. To better inform you of product variants and availability
            we’ve created this collectibility guide to walk you through how we think about these releases. </p> &nbsp;

          <p className='p-title-guide'>STANDARD RELEASE</p> &nbsp;

          <p className='p-guide'>The majority of our products are standard releases.
            These items are released frequently and intended to stay in stock for several years.
            These products are generally restocked after they sell out. </p> &nbsp;

          <p className='p-title-guide'>SPECIAL EDITION</p> &nbsp;

          <p className='p-guide'>Special Edition products are created to commemorate a special occasion or 
            unique variant of that item.
            They are available for a shorter period of time,
            at the end of which the product design goes into our Vault and may only be re-released
            in limited quantities for special moments.</p> &nbsp;



          <p className='p-title-guide'>LIMITED EDITION</p> &nbsp;

          <p className='p-guide'>Limited Edition products are unique and specialized items that are
             produced only once, and in small quantities.
            When they sell out they are Retired and unlikely to be available again. </p> &nbsp;


          <p className='p-title-guide'>CHROMA EDITION</p> &nbsp;

          <p className='p-guide'>Chroma Edition products are hyper-rare color-variant micro runs of an existing product.
            Like Limited Edition products, once they sell out they are Retired. </p> &nbsp;


          <p className='p-title-guide'>RETIRED vs IN THE VAULT</p> &nbsp;

          <p className='p-guide'>“In The Vault” products are those that have completed their
            initial run and sell through. During special moments these products may be re-released in limited quantities 
            and for a limited duration.

            “Retired” products are those that have completed their full run and
            sell through with no intention of additional availability. </p> &nbsp;

          <p className='p-title-guide'>BE BACK SOON</p> &nbsp;
          <p className='p-guide'>Products labeled “Be Back Soon” are those that will have additional
            stock and availability in the near future. They have a notification email that you can sign up
            for to be informed,
            as soon as possible, when they’re back in stock.</p> &nbsp;
        </div>
      </div>
    </div>
  )
}

export default CollectabilityGuide
