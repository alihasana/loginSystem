import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
User = mongoose.model('User');

let auth = express.Router();

auth.post('/login', (req, res) => {

})

auth.post('/register', (req, res) => {

});

export default auth;