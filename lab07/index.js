import Express from 'express';

const App = Express();

const port = 3002;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/names/:name', (req,res) => {
    let name = req.params.name;
    if (names.includes(name)){
        res.json({ Name: name});
    
    }
    else {
        res.json({Name : "Not Found"})
    }
});

App.get('/search/:name', (req, res) => {
    const result = names.filter(str => str.includes(req.params.name));

    if (result !=0) {
        res.json({ search: result});
    } else {
        res.json({ search: "Not found" });
    }
})

App.listen(port, () => {

});
