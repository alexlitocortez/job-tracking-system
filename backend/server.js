const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const User = require('./user')

mongoose.connect('mongodb+srv://acim650:Watterbeitslit25!@cluster0.ur0hj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser('secretcode'))

app.post('/login', (req, res) => {
    console.log(req.body)
})
app.post('/register', (req, res) => {
    User.findOne({username: req.body.username}, (err,doc) => {
        if (err) throw err;
        
    })
    console.log(req.body)
})
app.get('/user', (req, res) => {})

app.listen(port, () => (console.log('server has started')))