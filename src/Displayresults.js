import React  from 'react'
import Serachresults from './Serachresults';

export default class Displayresults extends React.Component {

    state={
        persons:[0],
        loading:true,
        
    }

    async componentDidMount(){
        const response=await fetch('https://uifaces.co/api', {
            method: 'GET',
            headers: {
              'X-API-KEY': "D4348B17-970C4A1C-8CA06B21-F1D2C6C0",
              'Accept': 'application/json',
              'Cache-Control': 'no-cache'
            }
        });
        const data = await response.json();
        this.setState({
            persons:data,loading:false
        })
        
    }


    cartUpdate =(upday)=>{
        
        this.props.intoCart(upday)
       
    }

    render() {
        
        return (
            <div>
                <h1>{this.props.toShow}</h1>
                {
                    this.state.loading || this.state.persons[0]===0 ?(
                        <div>loading...</div>
                    ):(
                        <div>
                           <Serachresults resultArr={this.state.persons} upCart={this.cartUpdate} />
                        </div>
                    )
                }
            </div>
        )
    }
}
