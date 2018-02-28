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
      .then(res => this.setState({ farmers: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          {this.state.farmers.map(farmer =>
            <div key={farmer.id} className="col-md-3 col-sm-6 col-xs-12 mx-auto">
              <div className="card border-none">
                <div className="card-body">
                  <Link to={`/farmers/${farmer.id}`}>
                    <h2 className="mt-4 text-white lead text-center">{farmer.name}</h2>
                  </Link>

                  <div className="mt-4">
                    <h3><strong>{farmer.name}</strong></h3>
                    <p>Looking for: £{farmer.target} worth of donations</p>
                    <p>Offers: </p>
                    <ul>
                      {Object.keys(farmer.offer).map((keyName, i) =>
                        <li key={i}>{[keyName]}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FarmersIndex;
