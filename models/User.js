import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
Schema = mongoose.Schema;

let UserSchema = new Schema({
  key: value {

  },
  key: value
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.hash_password));
}

mongoose.model('User', UserSchema);