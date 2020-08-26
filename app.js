const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

// Initialize the app
const app = express()

// Middleware
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
// JSON Body Middleware
app.use(bodyParser.json())
// CORS Middleware
app.use(cors())
// Setting up static dir
app.use(express.static(path.join(__dirname, 'public')))
// Passport Middleware
app.use(passport.initialize())
// Bring in Passport Strategy
require('./config/passport')(passport)

// Bring in the db config
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect to database ${err}`)
})

/*
app.get('/', (req,res) => {
    return res.send("<h1>Hello!<h1>")
})
*/

// Bring in the users route
const users = require('./routes/api/users')
app.use('/api/users', users)

const PORT = process.env.PORT || 5000
app.listen( PORT, () => {
    console.log(`Server started on port ${PORT}`)
})