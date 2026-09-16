

//Routing in Express

const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('You contacted root path');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});


app.post('/', (req, res) => {
    res.send('You send a post request to root');
});

app.post('/about', (req, res) => {
    res.send('You send a post request to about');
});


app.get('/search', (req, res) => {
    let query = req.query.q;
    res.send(`You searched for ${query}`);
});