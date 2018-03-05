const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('farmers')
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      res.status(200).json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {

  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      user.image = req.body.image;
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}


function usersAdopt(req, res, next) {
  const currentUser = req.currentUser.id;

  User
    .findById(currentUser)
    .exec()
    .then((user) => {

      user.adopted.push(req.body.farmerId);
      return user.save({ validateBeforeSave: false });
    })
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  adopt: usersAdopt,
  update: usersUpdate
};
