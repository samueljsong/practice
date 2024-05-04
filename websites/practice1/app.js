const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})


app.listen(3000, () => {
    console.log("Website is listening on port 3000")
})