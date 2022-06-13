const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')


// const authRouter = require('./middleware/auth')
// const bodyParser = require('body-parser')



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
// app.use(cors());

// app.use('/post', post)
// app.get('/', (req,res)=> res.send('hello post'))

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())




//Router
app.use('/user', require('./routers/userRouter'))
app.use('/detai', require('./routers/dotdangkyRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-phongbanRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-hochamRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-hocviRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-chucvuRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-capdetaiRouter'))
app.use('/danhmuc', require('./routers/danhmuc/dm-loaidetaiRouter'))
app.use('/thongbao', require('./routers/thongbaochungRouter'))







// Connect to mongodb
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Quan_ly_de_tai_NCKH', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log('MongoDB connected')

    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }
}
connectDB()



const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})