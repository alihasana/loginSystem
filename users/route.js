import express from 'express'
import mongoose from 'mongoose'
import User from './../models/User'

let users = express.Router();

users.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    else res.json(users);
  });
});

export default users;