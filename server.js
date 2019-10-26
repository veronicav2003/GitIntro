const express = require('express')
const app = express()


console.log("On branch test")
app.get('/', (req, res) => res.send('Hello World!'))

console.log("creating diff!!")

app.listen(3000, () => console.log('Example app listening on port 3000!'))
