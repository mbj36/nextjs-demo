import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema({
  name: String,
  age: Number
})

export default mongoose.model('User', User)
