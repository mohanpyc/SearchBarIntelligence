import React from 'react'
import Inteldisplay from './Inteldisplay';

const Previoussearches=(props)=> {

    const itemRemove=(itemR)=>{
        props.getItemR(itemR)
    }

    const searchPre = (itemS)=>{
        props.passItemS(itemS)
    }

    const intel=props.storedArray.map((i)=>{
       return <Inteldisplay key={props.storedArray.indexOf(i)} prevItemSearch={searchPre}  rmSearch={itemRemove} item={i}/>
    })

    return (
        <div>
            {intel}
        </div>
    )
}

export default Previoussearches
