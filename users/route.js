import express from 'express'
import mongoose from 'mongoose'
let User = require('./../models/User.js');

User = mongoose.model('User');

let users = express.Router();

users.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    else res.json(users);
  });
});

export default users;