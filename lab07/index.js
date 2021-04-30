import Express from 'express';
import chalk from 'chalk'; //imports chalk styleset from the installed external package
import intro from './intro.js'; //imports created external module to display in command line
import check from './servercheck.js'

const App = Express();

const port = 3008; //sets port to 3008

console.log(chalk.red.bold("The server has been updated!") ); 
//displays a bolded message when the nodemon server updates

intro();

check();

//var serverCheck = setInterval(function () {

    //console.log(chalk.blue.bold("The server is still running.") );
    //}, 25000); 
    
    //simple module that updates every 25000ms if the server is still operational
    //and outputs to console


const games = [
    'Mario',
    'Megaman 2',
    'Sonic 3',
    'Project Diva',
    'Skullgirls',
    'Street Fighter',
    'Monster Hunter',
    'Hades',
    'Katamari Damacy',
    'Castlevania',
    'Super Smash Bros',
    'Mario Kart'
];


App.get('/games/:title', (req,res) => {
    let title = req.params.title;
    if (games.includes(title)){
        res.json({ "This game exists in our system": title});
    
    }
    else {
        res.json({Title : "Title Not Found"})
    }
});

App.get('/search/:title', (req, res) => {
    const result = games.filter(str => str.includes(req.params.title));

    if (result !=0) {
        res.json({ search: result});
    } else {
        res.json({ search: "Title Not found" });
    }
})

App.listen(port, () => {

});
