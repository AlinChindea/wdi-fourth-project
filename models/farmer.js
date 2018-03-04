const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
  name: { type: String, required: 'Please provide a name'},
  image: { type: String, required: 'Please upload an image' },
  address: { type: String, required: 'Please provide a valid address.'  },
  location: {
    lat: {type: Number},
    lng: {type: Number}
  },
  story: { type: String, required: 'Please provide a brief story' },
  offer: {
    produce: {type: Boolean, required: 'Please choose what you offer in exchange'},
    weekendStay: {type: Boolean, required: 'Please choose what you offer in exchange'},
    farmExperience: {type: Boolean, required: 'Please choose what you offer in exchange'}
  },
  sponsored: {
    userId: String,
    donationAmount: String,
    product: String
  },
  target: {type: Number, required: 'Please add your required funding target'},
  sponsor: {type: mongoose.Schema.ObjectId, ref: 'User'},
  email: {type: String, required: 'Please provide an email'},
  number: {type: String, required: 'Please provide a phone number'},
  farmerTrue: {type: Boolean, required: true}
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
