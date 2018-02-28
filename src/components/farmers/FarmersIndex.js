import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class FarmersIndex extends Component {
  state = {
    farmers: []
  }

  componentWillMount() {
    Axios
      .get('/api/farmers')
      .then((res) => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        INDEX PAGE
      </div>
    );
  }
}

export default FarmersIndex;
