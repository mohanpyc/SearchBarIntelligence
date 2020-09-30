import React from 'react'
import './Inteldisplay.css'

function Inteldisplay(props) {

    let remove=false;

    const removeData=()=>{
        remove=true
        props.rmSearch(props.item)
    }
    
    const searchPrev=()=>{
        if(!remove){
            props.prevItemSearch(props.item)
        }
        
    }

    return (
   <div className="intelDispl">
       <button onClick={searchPrev} > {props.item}  <span onClick={removeData}>x</span> </button> 
   </div>
       
    )
}

export default Inteldisplay
