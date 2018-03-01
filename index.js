import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
const ObjectId = mongoose.Types.ObjectId;
//  Models import
import User from './models/User'
//  Routes import
import auth from './auth/route'

let app = express()

app.use(function (req, res, next) {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var url = 'mongodb://localhost:27017/login_system';
mongoose.connect(url, {}, function (err) {
  if (err) { throw err; } else {
    console.log("Connection to the Database etablished (" + url + ")");
    console.log("----------------");
  }
})

//  DB variables
var db = mongoose.connection;
var DBusers = db.collection('users');

app.use('/auth', auth);

var port = 8080
app.listen('port', () => console.log('Server running on port ' + port))