import React from 'react';
import Axios from 'axios';

import FarmersForm from './FarmersForm';
import Auth from '../../lib/Auth';

class FarmersNew extends React.Component {
  state = {
    farmer: {
      name: '',
      image: '',
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
      />
    );
  }
}

export default FarmersNew;
