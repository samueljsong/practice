const express = require('express')
const app = express();

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})