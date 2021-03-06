import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

let TokenSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true
  }
});

export default mongoose.model('Token', TokenSchema);