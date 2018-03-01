import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';
import Auth from '../../lib/Auth';

class Register extends React.Component {
  state = {
    user: {
      fullname: '',
      email: '',
      image: '',
      password: '',
      passwordConfirmation: '',
      farmerTrue: false
    }
  };

  handleChange = ({target: {name, value}}) => {
    const user = Object.assign({}, this.state.user, { [name]: value});
    this.setState({user});
  }

  handleImageUpload = result => {
    const user = Object.assign({}, this.state.user, { image: result.filesUploaded[0].url});
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);

        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleImageUpload={this.handleImageUpload}
      />
    );
  }
}

export default Register;
