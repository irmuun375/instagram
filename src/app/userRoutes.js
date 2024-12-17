const Route = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../app/models/userSchema")
const userRoute = Route

userRoute.post("/signup", async (req, res) => {
    const { username, email, password } = req.body
    const saltRound = 10
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const createdUser = userModel.create({
        username,
        email,
        password:hashedPassword
    })
    jwt.sign({
        userId:createdUser._id,
        username:createdUser.username
    })
})