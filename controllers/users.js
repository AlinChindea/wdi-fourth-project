const User = require('../models/user');

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
  show: usersShow,
  adopt: usersAdopt
};
