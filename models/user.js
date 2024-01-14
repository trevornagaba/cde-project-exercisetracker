const { uuid } = require('uuidv4');
const mongoose = require('../services/mongoose').mongoose;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  id: String
});

let User = mongoose.model('User', userSchema);

const createAndSaveUser = (username, done) => {
  const user = new User({
    username: username,
    id: uuid()
  });
  user.save(function (err, data) {
  done(null , data);})
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

exports.User = User;