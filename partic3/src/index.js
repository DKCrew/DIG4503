import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Jeremy",

  last_name: "W"

};


const output = <div>
  <h1>My name is {console.log(customer.first_name)}</h1>
<h2>My last name is {console.log(customer.last_name)}</h2>
</div>


ReactDOM.render(output, document.querySelector("#root"));
