import React, {Component} from 'react';
import MarketItem from './item'


class Market extends Component 
{
constructor(props){
    super(props);
    this.state = {
        count:0
    };
    
};


render() 
{


return(
    <div>
        <MarketItem count = {this.state.count}/>
        <button  onClick={() => this.setState({count: this.state.count +1})}> Click me </button>
    
    </div>
    
)

}

}


export default Market