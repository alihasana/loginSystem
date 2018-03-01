import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true
  },
  hash_password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  last_updated: { type: Date, default:Date.now }
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
}

mongoose.model('User', UserSchema);