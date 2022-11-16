import React, {useEffect} from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
    Aos.init({duration : 2800})
}, [])

  return (

    <div id="AboutUs">
      <div className='AboutContent'>

          <div id="part1">
              <div data-aos="zoom-in-down" id="AbDisc1">
                  <h2>What's Sahal ?</h2>
              <p>Our product is a one-liter bottle filled with pre done Nutritious Crepe’s Dough, Every thing the consumer have to do after purchasing a bottle of Sahal is to warm his/her and start cooking our delicious crepes. One Bottle can out make 25 Crepes.</p>
              </div>
              <div id="AbPics1">
                  <div data-aos="flip-left" id="prod1"></div>
                  <div data-aos="flip-right" id="prod2"></div>
              </div>
          </div>
          
          <div id="part2">
            <div id="Abpics2">
                    <div id="sec1">
                  <div data-aos="zoom-in" id="prod3"></div>
                  <div data-aos="zoom-in" id="prod4"></div>
                    </div>

                    <div id="sec2">
                  <div data-aos="zoom-in" id="prod5"></div>
                  <div data-aos="zoom-in" id="prod6"></div>
                    </div>
            </div>
            <div id="AbDisc2">
              Description 2
            </div>
          </div>
      </div>
    </div>
  
  )
}

export default About