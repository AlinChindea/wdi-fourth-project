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
      .then(res => this.setState({ farmers: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <React.Fragment>


        <div className="container">
          <Link to="/farmers/nearby"><button className="btn btn-primary">Farmers near you</button></Link>
          <div className="row">
            {this.state.farmers.map(farmer =>
              <div key={farmer.id} className="col-md-4 col-sm-6 col-xs-12 mx-auto">
                <div className="card border-none">
                  <div className="card-body">
                    <div className="mt-4">
                      <Link to={`/farmers/${farmer.id}`}>
                        <h3><strong>{farmer.name}</strong></h3>
                        <img src={farmer.image} className="img-fluid"/>
                      </Link>
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
      </React.Fragment>
    );
  }
}

export default FarmersIndex;
