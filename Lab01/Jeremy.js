const Person = require("./Person.js");

class Jeremy extends Person{
    constructor(name, colors, bgColors)
    {
        super(name, colors, bgColors);
    }
}

module.exports = Jeremy;