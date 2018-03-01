import express from 'express';
import mongoose from 'mongoose';
import auth from './auth/route';

let app = express();
mongoose.connect('mongodb://localhost/loginsystem);

app.use('/auth', auth);

var port = 8080
app.listen('port', () => {
  console.log('Server running on port ' + port);
});