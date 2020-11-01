const express = require('express')
const path = require('path')
const app = express()
const port = 7777

app.use(express.static(path.join(__dirname, '/static')))
app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/html/' })
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
