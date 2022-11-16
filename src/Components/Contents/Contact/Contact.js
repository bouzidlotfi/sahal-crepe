import React from 'react'
import './Contact.css'
import { SiJsdelivr } from 'react-icons/si';
import { GiTakeMyMoney } from 'react-icons/gi';

function Contact() {
  return (
    <div id="ContactUs">
      <div className='livraison'>
        <div id="deliv">
          <SiJsdelivr size="2em"/>   Express delivery (24 hours)
        </div>

        <div id="payment">
          <GiTakeMyMoney size="2em"/> Cash on delivery
        </div>
      </div>
      <div className='footer'>
        <div id="foot1">
          
        </div>
        <div id="foot2">
          <p>Join our #Sahal community by :</p>
            <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.instagram.com/?hl=fr">Instagram</a></li>
          <li><a href="https://www.tiktok.com/fr/">TikTok</a></li>
          <li><a href="https://www.whatsapp.com/?lang=fr">WhatsApp</a></li>
            </ul>
        </div>
        <div id="foot3">
        <p> For any request&suggestion :</p>
                <div id="req">
            <textarea type="submit" placeholder='Type here...'></textarea>
            <button>Submit</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Contact