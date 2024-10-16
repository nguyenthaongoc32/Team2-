import React from 'react'
import NavSupport from './NavSupport'
import '../Support/Accessibility.css'
const Accessibility = () => {
  return (
    <div>
      <NavSupport/>
      <div className='access-title-wrapper'>
        <h2 className='access-title-h2'>accessibility</h2>
      </div>
      <div className='access-content-wrapper'>
        <div className='access-main-container'>
          <p className='title-access'>Our commitment to accessibility:</p> &nbsp;
          <p className='p-access'>Riot Games is committed to meeting the needs of our players and accommodating the broadest possible range of abilities. 
           <br/> Our aim is to make our web content accessible to everyone. </p> &nbsp;
          <p className='p-access'>If you’re having difficulty viewing or navigating the content on this website or notice any content, 
            feature,<br/> or functionality that you believe isn’t fully accessible to people with disabilities, please contact us. </p> &nbsp;
          <ul className='ul-access'>
            <li className='li-access'>Submit a ticket at &nbsp;
              <a className='a-access' href='https://support.riotgames.com/' target='self'>https://support.riotgames.com</a>
            </li>
          </ul>
          <p className='p-access'>We take your feedback seriously and will consider it as we evaluate ways to
             accommodate all of our customers.<br/> Additionally, while we do not control such
              vendors, we strongly encourage vendors of third-party digital content to provide<br/>
               content that is accessible and user friendly.</p>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
