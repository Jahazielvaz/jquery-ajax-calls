let express = require('express')
let app = express()
// app.set('view engine', 'ejs')
app.use(express.static('./assets'))

let bodyParser = require('body-parser')
let urlencoded = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

})

let port = 4000
app.listen(port);
console.log(`Listening to port ${port}`);
