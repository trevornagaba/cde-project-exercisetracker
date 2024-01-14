const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { uuid } = require('uuidv4');
const mongoose = require('./services/mongoose').mongoose;
const User = require( './models/user');
const Exercise = require('./models/exercise');

// Function to parse data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

console.log(uuid());

app.route('/api/users').get(function(req, res) {
  res.json("Here");
}).post(function(req, res) {
  console.log(req);
  // Error: User.createandSave is not a function
  User.createandSave({username: req.body.username}, function(err, data) {});
  res.json({username: req.body.username, _id: data._id});
})

app.post('/api/:id/exercise', function(req, res) {
  res.json({name: string});
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

exports.uuid = uuid;