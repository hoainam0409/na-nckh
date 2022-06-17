require('dotenv').config()
const Users = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async (req, res) =>{
        try {
            const {username, password, hovaten} = req.body;

            const user = await Users.findOne({username})
            if(user) return res.status(400).json({msg: "The account already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                username, password: passwordHash, hovaten
            })

            // Save mongodb
            await newUser.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id})
            // const refreshtoken = createRefreshToken({id: newUser._id})

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/user/refresh_token',
            //     maxAge: 7*24*60*60*1000 // 7d
            // })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            if (!username || !password)
                return res.status(400).json({ success: false, message: 'Missing username or password' })

            const user = await Users.findOne({ username })
            if (!user) return res.status(400).json({ success:false, msg: "Incorrect username or password!" })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({success:false, msg: "Incorrect password!" })

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({ id: user._id })
            // const refreshtoken = createRefreshToken({ id: user._id })

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/user/refresh_token',
            //     maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
            // })

            res.json({ accesstoken })

            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            )
    
            res.json({
                success: true,
                message: 'User logged in successfully',
                accessToken
            })
            // res.json({success: true, msg:'Login successfully!'})

        } catch (err) {
            return { success : false, msg: err.message }
        }
    },
    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return { success : false, msg: err.message }
        }
    },
    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    // refreshToken: (req, res) =>{
    //     try {
    //         const rf_token = req.cookies.refreshtoken;
    //         if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

    //         jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
    //             if(err) return res.status(400).json({msg: "Please Login or Register"})

    //             const accesstoken = createAccessToken({id: user.id})

    //             res.json({accesstoken})
    //         })

    //     } catch (err) {
    //         return { success : false, msg: err.message }
    //     }
        
    // },
}
const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '11m' })
}
// const createRefreshToken = (user) => {
//     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
// }
module.exports = userCtrl