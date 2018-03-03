import React from 'react';
import Axios from 'axios';

import FarmersForm from './FarmersForm';
import Auth from '../../lib/Auth';

class FarmersNew extends React.Component {
  state = {
    farmer: {
      name: '',
      image: '',
      address: '',
      location: {
        lat: '',
        lng: ''
      },
      story: '',
      target: '',
      offer: {
        produce: false,
        weekendStay: false,
        farmExperience: false
      },
      email: '',
      number: '',
      farmerTrue: true
    },
    errors: {}
  }

  setLatLng = (place) => {

    const googleData = {
      address: place.formatted_address,
      location: place.geometry.location.toJSON()
    };
    const farmer = Object.assign({}, this.state.farmer, googleData);
    const errors = Object.assign({}, this.state.errors, { location: '', address: '' });
    this.setState({ farmer, errors });
  }

  handleFormCheckBox = ({ target: { value }}) => {
    const offer = Object.assign({}, this.state.farmer.offer, { [value]: !this.state.farmer.offer[value]});

    const farmer = Object.assign({}, this.state.farmer, { offer });

    this.setState({ farmer });
  }

  handleChange = ({ target: { name, value } }) => {
    const farmer = Object.assign({}, this.state.farmer, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ farmer, errors });
  }

  handleImageUpload = result => {
    const farmer = Object.assign({}, this.state.farmer, { image: result.filesUploaded[0].url});
    this.setState({ farmer});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.farmer);
    Axios
      .post('/api/farmers', this.state.farmer, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({errors: err.response.data.errors}));

  }

  render() {
    return (
      <FarmersForm
        history={this.props.history}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        farmer={this.state.farmer}
        errors={this.state.errors}
        handleFormCheckBox={this.handleFormCheckBox}
        handleImageUpload={this.handleImageUpload}
        handleFormFarmerCheckBox={this.handleFormFarmerCheckBox}
        setLatLng={this.setLatLng}
      />
    );
  }
}

export default FarmersNew;
