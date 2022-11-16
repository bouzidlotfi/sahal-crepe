import  {React, useRef} from 'react'
import './Panier.css'

function Panier({pannel, setPannel}) {
  const conPannelRef = useRef();

  const closePanModel = e =>{
      if(conPannelRef.current === e.target){
        setPannel(false)
      }
  }

  return (
    <>
    {pannel?
    <div id="panel" ref={conPannelRef} onClick={closePanModel}>Panier</div>

  :null}
    </>
  )
}

export default Panier