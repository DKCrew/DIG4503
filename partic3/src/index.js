import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Jeremy",

  last_name: "W"

};


const output = 
  <h1>My name is </h1>; console.log(customer.first_name);
<h2>My last name is </h2>; console.log(customer.last_name);


ReactDOM.render(output, document.querySelector("#root"));
