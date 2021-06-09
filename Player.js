import mongoose from 'mongoose'

const Player = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
})

export default mongoose.model('Player', Player);