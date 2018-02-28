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
      .then(res => this.setState({ farmers: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        {this.state.farmers.map(farmer =>
          <div key={farmer.id}>
            <Link to={`/farmers/${farmer.id}`}>
              <img src={farmer.image} className="img-responsive" alt={farmer.name}/>
            </Link>
            <h3><strong>{farmer.name}</strong></h3>
            <p>Looking for: {farmer.looking} donors</p>
            <p>Offers {farmer.offer}</p>
          </div>

        )}
      </div>
    );
  }
}

export default FarmersIndex;
