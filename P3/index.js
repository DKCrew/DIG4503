import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Alex",

  last_name: "DeVille"

};


const output = <div> console.log(customer.first_name);
    console.log(customer.last_name);
</div>;

ReactDOM.render(output, document.querySelector("#root"));