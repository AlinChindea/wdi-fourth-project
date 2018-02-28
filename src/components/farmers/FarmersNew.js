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
      looking: '',
      offer: ''
    },
    errors: {}
  }

  handleChange = ({ target: { name, value } }) => {
    const farmer = Object.assign({}, this.state.farmer, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ farmer, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();

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
      />
    );
  }
}

export default FarmersNew;
