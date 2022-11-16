import React from 'react'
import './PageAccueil.css'
import { BsChevronDoubleDown } from 'react-icons/bs';



function PageAccueil() {
  return (
      
    <div id='Home'>
                <div className='Home'>
            {/* <div id="Aidepart">
                </div> */}
            <div id='AccueilContent'>
        <div id="partDesc">
            <h3 className='Desc1'> <h4>Sahal,</h4> <p>The first 100% Algerian product of pre done crepe preparation. <br/>  <h5>«Sahal، معانا الطياب»</h5></p>  </h3>
                    <a href="#AboutUs"> tap to scroll < BsChevronDoubleDown size="1.1em"/>
            
                  </a>
        </div>
        <div id="partPhoto">
            <div id="sahal1">
              
            </div>
        </div>
            </div>
            </div>
    </div>
  )
}

export default PageAccueil