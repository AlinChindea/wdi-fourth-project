import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Auth from '../../lib/Auth';

import SearchBar from '../utility/SearchBar';
import BackButton from '../utility/BackButton';


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
        { Auth.isAuthenticated() &&
        <SearchBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
        />}
        <section className="hero">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-3 offset-md-9 col-sm-12">
                <BackButton history={this.props.history}/>
              </div>
            </div>
            <br />
            <div className="row">
              {farmers.map(farmer =>
                <div key={farmer.id} className="col-md-4 col-sm-6 col-xs-12 mx-auto">
                  <div className="card border-none">
                    <div className="card-body">
                      <div className="mt-4">
                        <Link to={`/farmers/${farmer.id}`}>
                          <h4 className="index-names"><strong>{farmer.name}</strong></h4>
                          <img src={farmer.image} className="img-fluid index-image"/>
                        </Link>
                        <p>Looking for: £{farmer.target} worth of donations</p>
                        <p>Offers: </p>
                        <ul className="farmer-offer-list">
                          {Object.keys(farmer.offer).map((keyName, i) => {
                            const titleCase = keyName.replace( /([A-Z])/g, ' $1' );
                            const result =  titleCase.charAt(0).toUpperCase() + titleCase.slice(1);
                            return <li key={i}>{[result]}</li>;
                          }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FarmersIndex;
