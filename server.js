const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('We are the music makers, we are the dreamers of the dreams!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))