import React from 'react';
import Axios from 'axios';


import Nearby from '../utility/Nearby';

class FarmersNearby extends React.Component {
  state = {
    farmers: []
  }
  componentWillMount() {
    Axios
      .get('/api/farmers')
      .then(res => this.setState({ farmers: res.data }))
      .catch(err => console.log(err));
  }
  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col">
            {this.state.farmers.length !== 0 &&
            <Nearby
              farmers={this.state.farmers}
            />}
          </div>
        </div>
      </div>

    );
  }
}

export default FarmersNearby;
