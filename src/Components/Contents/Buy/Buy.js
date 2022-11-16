import React from 'react'
import './Buy.css'

function Buy() {


  return (
    <div id='BuyPage'>
      <h2>For you order :</h2>
            <div id="BuyPart">
        <div id='BuyPart1'>
          Name :<input type='text' placeholder='Type your name..'></input>
          Adress :<input type='text' placeholder='Type your adress..'></input>
          Phone 1 :<input type='phone' placeholder='Type your phone number..'></input>
          Phone 2(optional) :<input type='phone'placeholder='Type a second phone number..'></input>
        </div>
      <div id='BuyPart2'>
          <div id="BuyPic">
            <div id="Pic"></div>
            <div id="price">Price : 400da</div>
          </div>
          <div id="quantité">
          Quantity : <input type='number'/>
          </div>

          <button id="send">Send</button>
      </div>
            </div>
    </div>
  )
}

export default Buy