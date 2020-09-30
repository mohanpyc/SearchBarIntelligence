import React,{useState} from 'react'
import Topnav from './Topnav'
import Displayresults from './Displayresults'
import Cart from './cart'

function App() {
  const [displaySt, setdisplaySt] = useState("")
  const [cart,setCart]=useState(false)
  const [cartData,setCartData]=useState([0])
   
    const showResult =(res) => {
        setdisplaySt(res)
    }

    const sayCart = ()=>{
        setCart(true)
    }

    const cartDa =(dat)=>{
        setCartData(dat)
    }

    
    
    return (
        <div>
            <Topnav toSearchStr={showResult} needCart={sayCart} />
            
            {
                cart?<Cart willgive={cartData} />:<Displayresults toShow={displaySt}  intoCart={cartDa}/>
            }
        </div>
    )
}

export default App
