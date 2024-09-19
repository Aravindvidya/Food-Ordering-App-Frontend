import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=''/>
            <p>Isit amet consectetur adipisicing. Aliquid minus laudantium debitis quibusdam commodi provident repellat, deserunt adipisci, consequatur ut a, eius nesciunt harum tenetur ratione aut nostrum dolor voluptates!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
                <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 687239590</li>
                    <li>contact@tomato.com</li>
                    <li></li>
                    <li></li>
                </ul>
                
                </div>
                
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024</p>
    </div>
  )
}

export default Footer
