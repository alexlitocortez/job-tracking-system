var router = require('express').Router()

router.get('/', function(req, res) {
    res.send('Users index page')
})

router.get('/list', function(req, res) {
    res.send('Users List Page')
})

router.post('/register', async (req, res) => {
    const user = req.body

    // check if username or email has already been taken by another user
    const takenUsername = await User.findOne({ username: user.username })
    const takenEmail = await User.findOne({ email: user.email })

    if (takenUsername || takenEmail) {
        res.json({ message: "Username or email has already been taken" })
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })

        dbUser.save()
        res.json({ message: "Success" })
    }
})

module.exports = router;