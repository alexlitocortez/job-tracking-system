const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./models/Users')

// Routes
const UserRoute = require('./Routes/UserRoute')
const LoginRoute = require('./Routes/LoginRoute')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)

// Connects to MongoDB database
const dbURI = 
'mongodb+srv://acim650:Watterbeitslit25!@cluster0.ur0hj.mongodb.net/?retryWrites=true&w=majority'

// Second parameter removes depreciation errors
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
    //Only listen for requests once database data has loaded
    app.listen(process.env.PORT, () => console.log('Server is live'))
})
.catch(err => console.log(err))

app.get("/", cors(), async(req, res) => {
    res.send("This is working")
})

// Register routes to Express
app.use('/register', UserRoute)
app.use('/login', LoginRoute)


app.listen(3000, () => {
    console.log(`Listening at http://localhost: ${port}`)
})