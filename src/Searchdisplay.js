import React,{useState,useEffect,useRef} from 'react'
import Previoussearches from './Previoussearches';
import './Searchdisplay.css';

function Searchdisplay(props) {

    const [visible,setVisible]=useState("visibl");
    const [preSearchArray,setPreSearchArray]=useState([]);
    const [inputval,setInputval]=useState("");
    
    const displaySearch = (toBeS) => {
       props.tobeSearch(toBeS);
       setPreSearchArray([toBeS,...preSearchArray.filter(i=>i!=toBeS)])
      setVisible("visibl")
    }

    const removePreSearchItem = (toBeR)=>{
        setPreSearchArray(preSearchArray.filter(i=>i!==toBeR))
    }

    const previousStore = (event) => {

        if(inputval>"a" & inputval.length>1 & !(preSearchArray.includes(inputval))){
            if(preSearchArray.length===8){
                setPreSearchArray([inputval,...preSearchArray.slice(0,7)]);
                setInputval("");
            }else{
                setPreSearchArray([inputval,...preSearchArray]);
                setInputval("");
            }
        }else if(preSearchArray.includes(inputval)){  
            setInputval("");
            }
        
        if (inputval > "a") {
                props.tobeSearch(inputval);
            } 
        }


    const arraySize = () => {
        if(preSearchArray.length>0){
            setVisible("");
        }
      
    }

    const inpval = (e) => {
        console.log("came")
        setInputval(e.target.value);
        setVisible("visibl");
    }

    const prevndf =(event)=>{
        event.preventDefault();
    }

    useEffect(() => {
      document.body.addEventListener("click",(event)=>{
          if(ref.current.contains(event.target)){
              return;
          }
          setVisible("visibl");
      })  
    }, [])

    const ref = useRef()
    
        
    

    return (
        <div >

        <div>
           <form className="searchBoxForm" onSubmit={prevndf}  >
                <input  
                    ref={ref}
                    id="textSeacrh"
                    onFocus={arraySize} 
                    value={inputval} 
                    onChange={inpval}
                />
                <button id="searchBtn" onClick={previousStore}  >Search</button>
            </form>

             <div className={`intelli ${visible}`}>
                 <Previoussearches storedArray={preSearchArray} passItemS={displaySearch}  getItemR={removePreSearchItem} />
             </div>
        
            </div>
            
        </div>
    )
}

export default Searchdisplay



// import React  from 'react';
// import Previoussearches from './Previoussearches';
// import './Searchdisplay.css';

// export default class Searchdisplay extends React.Component {

//     state={
//         inputValue:"",
//         preSearchArray:[],
//         visible:"visibl",
//         prevSearchItem:""
//     };

//     inpval = (e) => {
        
//         this.setState({
//             inputValue:e.target.value,
//             visible:""
//         })
        
//     }

//     preSearchArray = () => {
//         if(this.state.preSearchArray.length>0){
//             this.setState({
//                 visible:"visibl"
//                })
//         }
      
//     }
    
//     previousStore = (event) => {

//       if(this.state.inputValue>"a" & this.state.inputValue.length>1 & !(this.state.preSearchArray.includes(this.state.inputValue))){
//           if(this.state.preSearchArray.length===8){
//               this.setState(
//                   {
//                       preSearchArray:[this.state.inputValue,...this.state.preSearchArray.slice(0,7)],
//                       inputVal:"",
                     
//                   }
//               )
//           }else{
//             this.setState({
//                 preSearchArray:[this.state.inputValue,...this.state.preSearchArray],
//                 inputValue:"",
               
                
//             })

//           }
       
//       }else if(this.state.preSearchArray.includes(this.state.inputValue)){
//                 this.setState({
//                     inputValue:"",
                   
//                 })
//       }
//       if (this.state.inputValue > "a") {
//         this.props.tobeSearch(this.state.inputValue);
//       }
            
      
//     }

//     prevndf = (event) => {
//         event.preventDefault();
//         // this.setState({

//         // })
//     }

//     // changeKey = () => {
//     //     this.setState({
//     //         onFockus:true
//     //     })
//     // }

//     removePreSearchItem = (toBeR)=>{
//        this.setState({
//            preSearchArray:this.state.preSearchArray.filter(i=>i!==toBeR),
           
//        })
//     }

//     displaySearch = (toBeS) => {
//        this.props.tobeSearch(toBeS)
//        this.setState({
//             visible:"visibl"
//        })
//     }


//     render() {
       
//         return (
//             <div>

//             <form className="searchBoxForm" onSubmit={this.prevndf}  >
//                 <input  
//                     id="textSeacrh"
//                     onFocus={this.preSearchArray} 
//                     value={this.state.inputValue} 
//                     onChange={this.inpval}
//                     // onBlur={this.changeKey}
//                 />
//                 <button id="searchBtn" onClick={this.previousStore}  >Search</button>
//             </form>

//             {/* {this.state.onFockus===false?<div className="intelli">
//                 <Previoussearches storet={this.state.preSearchArray} passItemS={this.displaySearch}  getItemR={this.removePreSearchItem} />
//             </div> :""}
//              */}

//              <div className={`intelli ${this.state.visible}`}>
//                  <Previoussearches storet={this.state.preSearchArray} passItemS={this.displaySearch}  getItemR={this.removePreSearchItem} />
//              </div>
        
//             </div>
//         )
//     }
// }
