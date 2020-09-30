import React from 'react'

function Personcard(props) {
    const prop=props.resul;

    const passTOcart=()=>{
        props.cartfetch(prop)
    }

    return (

      
        <div onClick={passTOcart}>
            <img style={{width:"80%",height:"300px"}} src={prop.photo} alt={prop.name} />
            <h2>{prop.name}</h2>
            <h3>mailId : <span style={{color:"green"}}> {prop.email}</span> </h3>
            <h3>Position :  <span style={{color:"red"}}> {prop.position}</span></h3>
        </div>
    )
}

export default Personcard
