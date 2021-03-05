import React from 'react';

function MarketItem(props){

    return(
        <div>
            <p>You're up to {props.count} clicks!</p>
        </div>
    );

}

export default MarketItem