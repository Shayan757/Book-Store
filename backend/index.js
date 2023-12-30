const ConnectToMongo = require("./db")
const express = require('express')
const cors = require('cors')



ConnectToMongo();




const app = express()
const port = 3000


app.use(express.json());
app.use(cors())


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.use('/api/books', require('./routes/books'))
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

