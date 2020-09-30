import React from 'react'
import Cart from './cart'

function Cartlist(props) {
    const order=props.willgive.map((i,index)=>{
        return <Cart key={index} item={i}/>
    })
    return (
        <div>
            {order}
        </div>
    )
}

export default Cartlist
