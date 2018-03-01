import React from 'react';
import Axios from 'axios';

import FarmersForm from './FarmersForm';

import Auth from '../../lib/Auth';

class FarmersEdit extends React.Component {
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
      number: ''
    },
    errors: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => this.setState({ farmer: res.data}))
      .catch(err => console.log(err));
  }

  setLatLng = (place) => {
    console.log(place);
    console.log('location log', place.geometry.location.toJSON());
    const googleData = {
      address: place.formatted_address,
      location: place.geometry.location.toJSON()
    };

    const farmer = Object.assign({}, this.state.farmer, googleData);
    this.setState({ farmer }, () => console.log(this.state.farmer));
  }

  handleChange = ({ target: { name, value } }) => {
    const farmer = Object.assign({}, this.state.farmer, { [name]: value });
    this.setState({ farmer });
  }

  handleFormCheckBox = ({ target: { value }}) => {
    const offer = Object.assign({}, this.state.farmer.offer, { [value]: !this.state.farmer.offer[value]});

    const farmer = Object.assign({}, this.state.farmer, { offer });

    this.setState({ farmer });
  }

  handleImageUpload = result => {
    const farmer = Object.assign({}, this.state.farmer, { image: result.filesUploaded[0].url});
    this.setState({ farmer });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/farmers/${this.props.match.params.id}`, this.state.farmer, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.props.history.push(`/farmers/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FarmersForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        farmer={this.state.farmer}
        errors={this.state.errors}
        handleFormCheckBox={this.handleFormCheckBox}
        handleImageUpload={this.handleImageUpload}
      />
    );
  }
}

export default FarmersEdit;
