import React from 'react';
import Axios from 'axios';

import Nearby from '../utility/Nearby';

class FarmersNearby extends React.Component {
  state = {
    farmer: {},
    center: {
      lat: null,
      lng: null
    }
  }
  componentWillMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => console.log(res));
    // .catch(err => console.log(err));
  }
  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1>Map with nearby farmers goes here</h1>
            {this.state.center.lat && <h1>map loading...</h1>}
            {!this.state.center.lat &&
        <Nearby center={this.state.center}/>}
          </div>
        </div>
      </div>

    );
  }
}

export default FarmersNearby;
