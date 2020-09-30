import './Searchresults.css'
import React from 'react'
import Personcard from './Personcard'


function Serachresults(props) {

    const fetchcard =(car)=>{
        props.upCart(car)
    }
  
    const person=props.resultArr.map((i,index)=>{
        return <Personcard key={index} resul={i} cartfetch={fetchcard} />
    })
    return (
        <div className="apiresults">
            {person}
        </div>
    )
}

export default Serachresults
