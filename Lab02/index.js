const axios = require("axios"); //calls axios to run

    axios('http://pokeapi.co/api/v2/pokemon/gengar') //accesses the created api for data on pokemon

        .then(function (response) //function to receive the api response

        {
            const pokemon = response.data; //creates a constant to store the pokemon data

            console.log("This pokemon's name is " + pokemon.name + " and its pokedex number is " + pokemon.id);
            //logs result from API
        }
    )

    .catch(function(error){ //function to display error if Api result is not found (pokemon not listed etc.)
        console.log("There has been an Error: " + error);
    }
    );