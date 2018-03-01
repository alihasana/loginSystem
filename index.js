import express from 'express';
import mongoose from 'mongoose';
import auth from './auth/route';

let app = express();
mongoose.connect('mongodb://localhost/loginsystem);

app.use('/auth', auth);

app.listen('8080', () => {
  console.log('Server running on port 8080...');
});