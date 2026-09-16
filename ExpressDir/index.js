const express = require('express');

const app = express();

let port = 3000;



app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});


app.use((req, res) => {
    console.log('Request received');
    res.send({
        name: "Apple",
        color: "Red",
        price: 55
    });
});