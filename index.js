import express from 'express';
import mongoose from 'mongoose';
import router from './users/route';

let app = express();
mongoose.connect('mongodb://localhost/loginsystem);

app.use('/auth', auth);

app.listen('8080', () => {
  console.log('Server running on port 8080...');
});