const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({});


farmerSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('farmer', farmerSchema);
