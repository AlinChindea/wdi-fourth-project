const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
  name: { type: String, required: 'Please provide a name'},
  image: { type: String, required: 'Please upload an image' },
  location: {
    lat: Number,
    lng: Number
  },
  story: { type: String, required: 'Please provide a brief story' },
  offer: {type: Array, required: 'Please choose what you offer in exchange'},
  target: {type: Number, required: 'Please add your required funding target'},
  sponsor: {type: mongoose.Schema.ObjectId, ref: 'User'},
  contact: {
    email: {type: String, required: true},
    number: {type: String, required: true}
  }
});

farmerSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('farmer', farmerSchema);
