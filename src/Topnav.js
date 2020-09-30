import React from "react";
import Searchdisplay from './Searchdisplay';
import './Topnav.css'

function Topnav(props) {

  

    const toDisplay = (ste)=>{
        props.toSearchStr(ste)
    } 

    const showCart =()=>{
      props.needCart(true)
    }

  

  return (
    <div>
      <div className="navcontainer">
        <div className="logo">
          <p>Amazon</p>
        </div>

        <div className="searchBox">
          <Searchdisplay
            tobeSearch={toDisplay}
            
          />
        </div>

        <div className="navbar">
          <ul>
            <li>Account</li>
            <li onClick={showCart}>Orders</li>
            <li>Amazon Pay</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
