const axios = require("axios");

    axios('http://pokeapi.co/api/v2/pokemon/gengar')

        .then(function (response)

        {
            const pokemon = response.data;

            console.log("This pokemon's name is " + pokemon.name + " and its pokedex number is " + pokemon.id);

        }
    )

    .catch(function(error){
        console.log("There has been an Error: " + error);
    }
    );