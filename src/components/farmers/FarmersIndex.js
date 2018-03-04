import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SearchBar from '../utility/SearchBar';


class FarmersIndex extends Component {
  state = {
    farmers: [],
    sortBy: 'target',
    sortDirection: 'desc',
    query: ''
  }

  componentWillMount() {
    Axios
      .get('/api/farmers')
      .then(res => this.setState({ farmers: res.data}))
      .catch(err => console.log(err));
  }

  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({sortBy, sortDirection});
  }

  handleSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  sortingAndFiltering = () => {
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedFarmers = _.orderBy(this.state.farmers, [sortBy], [sortDirection]);
    const farmers = _.filter(orderedFarmers, (farmer) => regex.test(farmer.target) || regex.test(farmer.name));
    return farmers;
  }

  render() {
    const farmers = this.sortingAndFiltering();
    return(
      <React.Fragment>
        <div className="container">
          <SearchBar
            handleSort={this.handleSort}
            handleSearch={this.handleSearch}
          />
          <div className="row">
            {farmers.map(farmer =>
              <div key={farmer.id} className="col-md-4 col-sm-6 col-xs-12 mx-auto">

                <div className="card border-none">
                  <div className="card-body">
                    <div className="mt-4">
                      <Link to={`/farmers/${farmer.id}`}>
                        <h3 className="index-names"><strong>{farmer.name}</strong></h3>
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
