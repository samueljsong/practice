const express = require('express')

const app = express();
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.listen(4000, () => {
    console.log("APP IS LISTENING ON PORT 4000")
})