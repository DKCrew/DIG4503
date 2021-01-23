const chalk = require ("chalk");

class Person {
    constructor(name, favoriteColor, backgroundColor) {

        this.name = name;

        this.favoriteColor = favoriteColor;
        
        this.backgroundColor = backgroundColor;

    }

    speak() {

        for(let i = 0; i < this.favoriteColor.length; i++) {
            console.log(chalk.bgHex(this.backgroundColor[i]).hex(this.favoriteColor[i])(this.name));
        }
    }

}

module.exports = Person;


module.exports = Person;