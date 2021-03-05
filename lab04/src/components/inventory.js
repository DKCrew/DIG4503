import React, {Component} from 'react';
import MarketItem from './item';
import User from './user';
import Icon from './icon';
import Header from './header';


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
        <h1><Icon/></h1>
        <h2><User/></h2>
        <h3><Header/></h3>
        <br/>
        <MarketItem count = {this.state.count}/>
        <button  onClick={() => this.setState({count: this.state.count +1})}> Click me </button>    
    </div>
    
)

}

}


export default Market