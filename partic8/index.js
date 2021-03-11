import Express from 'express';

const App = Express();

const port = 3001;

const strawHat = [
    'Luffy',
    'Zoro',
    'Nami',
    'Sanji',
    'Chopper',
    'Robin',
    'Franky',
    'Brook',
    'Jinbe'
];

const year = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

App.get('/strawHats/:crew', (req,res) => {
    let crew = req.params.crew;
    if (strawHat.includes(crew)){
        res.json({ Member: crew});
    
    }
    else {
        res.json({Member : "Not on the crew"})
    }
});

App.get('/year/:month', (req,res) => {
    let month = req.params.month;
    if (year.includes(month)){
        res.json({ Calendar: month});
    
    }
    else {
        res.json({Calendar : "Not a real month (In english)"})
    }
});


App.listen(port, () => {

});