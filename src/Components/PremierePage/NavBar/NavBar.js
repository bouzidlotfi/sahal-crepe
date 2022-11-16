import  {React, useRef, useState} from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Panier from '../../Contents/Panier/Panier';


function NavBar() {

  const [pannel, setPannel] = useState(false);
    const openPanModel = () => setPannel(!pannel);

  return (
<>
    {/* <div id='NavBar'> */}
          <div id="title">
    {/* <div id="logo"> l</div> */}
                SAHAL
          </div>
          <div className='NavContent'>
              <ul id='NavItems'>
                  <a href="#AccueilContent"><li id="Home">Home</li></a>
                  <a href="#AboutUs"><li id="About">About Us</li></a>
                  <a href="#BuyPage"><li id="Buy">Buy</li></a>
                  <a href="#ContactUs"><li id="Contact us">Contact Us</li></a>
              </ul>
      <div className='Aide' onClick={()=>{openPanModel()}}>
        <AiOutlineShoppingCart size="2em"/>
        <Panier connect={pannel} setConnect={setPannel} />

      </div>
          </div>
    {/* </div> */}
    
</>
  )
}

export default NavBar