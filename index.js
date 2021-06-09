import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000;
const URL_DATABASE = 'mongodb+srv://user:user@cluster0.xzoi0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(URL_DATABASE, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, ()=> console.log("Server worked on port " + PORT));
    } catch(e) {
        console.log(e)
    }
}

startApp();