import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
function connect() {
  mongoose.connect(process.env.MONGO_URL, err => {
    if (err) throw err
    console.log('DB open')
  })
}

export default connect
