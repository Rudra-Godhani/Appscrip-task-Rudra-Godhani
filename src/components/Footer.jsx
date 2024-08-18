/* eslint-disable no-unused-vars */
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className='left'>
          <h3>
            BE THE FIRST TO KNOW
          </h3>
          <p>Sign up for updates from mettā muse.</p>
          <div>
            <input type="email" placeholder='Enter your e-mail...' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="right">
          <h3>CONTACT US</h3>
          <p className='phone'>+44 221 133 5360</p>
          <p className='email'>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p className='usd'>USD</p>
          <p className='desc'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="bottom">
        <div className='metta_muse'>
          <h3>
            mettā muse
          </h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="follow_us">
          <h3>Follow Us</h3>
          <div className='icons'>
            <div className='instagram'>
              <IoLogoInstagram style={{ fontSize: '16px' }} />
            </div>
            <div className='linkedin'>
              <CiLinkedin style={{ fontSize: '18px' }} />
            </div>
          </div>
          <h3 style={{ marginTop: '50px' }}>mettā muse Accepts</h3>
          <div className='pay'>
            <img src="../../gpay.png" alt="" className='gpay' />
            <img src="../../master.webp" alt="" className='master' />
            <img src="../../apple.png" alt="" className='apple' />
            <img src="../../paypal.png" alt="" className='paypal' />
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
