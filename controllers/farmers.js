const Farmer = require('../models/farmer');

function farmersIndex(req, res, next) {
  Farmer
    .find()
    .exec()
    .then(farmers => res.json(farmers))
    .catch(next);
}

function farmersCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Farmer
    .create(req.body)
    .then(farmer => res.status(201).json(farmer))
    .catch(next);
}

function farmersShow(req, res, next) {
  Farmer
    .findById(req.params.id)
    .exec()
    .then((farmer) => {
      if(!farmer) return res.notFound();
      res.json(farmer);
    })
    .catch(next);
}

function farmersUpdate(req, res, next) {

  // filestack
  if(req.file) req.body.image = req.file.filename;

  Farmer
    .findById(req.params.id)
    .exec()
    .then((farmer) => {
      if(!farmer) return res.notFound();
      farmer = Object.assign(farmer, req.body);
      return farmer.save();
    })
    .then(farmer => res.json(farmer))
    .catch(next);
}

function farmersDelete(req, res, next) {
  Farmer
    .findById(req.params.id)
    .exec()
    .then((farmer) => {
      if(!farmer) return res.notFound();
      return farmer.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function addDonation(req, res, next) {
  req.body.donationAmount = parseInt(req.body.donationAmount);
  req.body.userId         = req.currentUser;

  Farmer
    .findById(req.params.id)
    .exec()
    .then(farmer => {
      if(!farmer) return res.notFound();

      farmer.donations.push(req.body);

      return farmer.save();
    })
    .then(farmer => {
      return res.status(200).json(farmer);
    })
    .catch(next);
}

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.currentUser;

  Farmer
    .findById(req.params.id)
    .exec()
    .then((farmer) => {
      if(!farmer) return res.notFound();

      const comment = farmer.comments.create(req.body);
      farmer.comments.push(comment);
      return farmer.save();
    })
    .then(farmer => res.json(farmer.comments[farmer.comments.length - 1]))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Farmer
    .findById(req.params.id)
    .exec()
    .then((farmer) => {
      if(!farmer) return res.notFound();

      const comment = farmer.comments.id(req.params.commentId);
      comment.remove();
      farmer.save();
      return res.status(204).json(farmer.comments);
    })
    .catch(next);
}

module.exports = {
  index: farmersIndex,
  create: farmersCreate,
  show: farmersShow,
  update: farmersUpdate,
  delete: farmersDelete,
  addDonation: addDonation,
  addComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
