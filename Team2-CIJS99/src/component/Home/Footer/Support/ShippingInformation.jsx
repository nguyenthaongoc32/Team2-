import React from 'react'
import NavSupport from './NavSupport'
import '../Support/ShippingInformation.css'
const ShippingInformation = () => {
  return (
    <div>
      <NavSupport />
      <div className='shipping-title-wrapper'>
        <h2 className='shipping-title-h2'>shipping estimated arrival times</h2>
      </div>
      <div className='shipping-content-wrapper'>
        <div className='shipping-main'>
          <h1><br /></h1>
          <table>
            <tbody>
              <tr className='shipping-title-tr'>
                <th>Region</th>
                <th>Delivery Estimate from Ship Date</th>
              </tr>
              <tr>
                <td>
                  <strong>Americas &amp; (Fulfilled from the US)</strong>
                </td>
              </tr>
              <tr>
                <td>US</td>
                <td>3-8 business days</td>
              </tr>
              <tr>
                <td>Puerto Rico</td>
                <td>7-14 business days</td>
              </tr>
              <tr>
                <td>Canada</td>
                <td>8-14 business days</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <strong>Europe &amp; (Fulfilled from Netherlands)
                  </strong>
                </td>
              </tr>
              <tr>
                <td>Austria</td>
                <td>4-7 business days</td>
              </tr>
              <tr>
                <td>Belgium</td>
                <td>4-7 business days</td>
              </tr>
              <tr>
                <td>Czech Republic</td>
                <td>4-7 business days</td>
              </tr>
              <tr>
                <td>Denmark</td>
                <td>4-7 business days</td>
              </tr>
              <tr>
                <td>Romania</td>
                <td>7-9 business days</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>4-7 business days</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <strong>Asia &amp; Oceania (Fulfilled from the US)</strong>
                </td>
              </tr>
              <tr>
                <td>Australia</td>
                <td>8-14 business days</td>
              </tr>
              <tr>
                <td>New Zealand</td>
                <td>8-14 business days</td>
              </tr>
              <tr>
                <td>Singapore</td>
                <td>8-14 business days</td>
              </tr>
              <tr>
                <td>Taiwan</td>
                <td>8-14 business days</td>
              </tr>
              <p></p>
              <p className='shipping-p'>Note: Please select the appropriate website for your region as not all countries/region are
                available as shipping options from all websites. </p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShippingInformation
