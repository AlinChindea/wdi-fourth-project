import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import GoogleMap from '../utility/GoogleMap';
import Auth from '../../lib/Auth';
import DonationBox from './DonationBox';

class FarmersShow extends Component {
  state = {
    farmer: {},
    center: {
      lat: null,
      lng: null
    },
    user: {}
  }

  deleteFarmer = () => {
    Axios
      .delete(`/api/farmers/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/farmers'))
      .catch(err => console.log(err));
  }

  adoptFarmer = () => {
    Axios
      .put('/api/users/adopt', { farmerId: this.state.farmer.id }, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => this.setState({ user: res.data }));
  }

  handleChange = (e) => {

    const sponsored = Object.assign({}, this.state.farmer.sponsored, { [e.target.name]: e.target.value });

    const farmer = Object.assign({}, this.state.farmer, {sponsored});

    this.setState({ farmer });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const sponsored = Object.assign({}, this.state.farmer.sponsored, { userId: Auth.getPayload().userId });

    const farmer = Object.assign({}, this.state.farmer, { sponsored });

    this.setState({ farmer });

    Axios
      .put(`/api/farmers/${this.props.match.params.id}`, this.state.farmer)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  componentWillMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => this.setState({ farmer: res.data, center: {lat: res.data.location.lat, lng: res.data.location.lng}}))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <img src={this.state.farmer.image} className="img-fluid"/>
            <h3><strong>{this.state.farmer.name}</strong></h3>
            <p><em>{this.state.farmer.story}</em></p>
            <p><em>Looking for: £{this.state.farmer.target}</em></p>
            <p><em>We are offering:</em></p>
            <ul>
              {this.state.farmer.offer &&  Object.keys(this.state.farmer.offer).map((keyName, i) =>
                <li key={i}>{[keyName]}</li>
              )}
            </ul>
            {this.state.farmer.contact && <p><em>Contact Us at: {this.state.farmer.contact.email} or {this.state.farmer.contact.number}</em></p>}

            <br />
            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-primary">
                  <Link to={`/farmers/${this.state.farmer.id}/edit`} ><i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </button>
              </div>
              <div className="col-md-3">
                <button className="btn btn-primary" onClick={this.deleteFarmer}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
              <div className="col-md-6">
                {!this.state.center.lat && <h1>map loading...</h1>}
                {this.state.center.lat &&
            <GoogleMap center={this.state.center}/>}
              </div>
            </div>
            {Auth.isAuthenticated() &&
            <div className="col-md-3">
              <button className="btn btn-primary" onClick={this.adoptFarmer}>
                <p>ADOPT!</p>
              </button>
            </div>
            }
            {!Auth.isAuthenticated() &&
            <Link to="/register">
              <div className="col-md-3">
                <button className="btn btn-primary">
                  <p>Please Register/Sign In To Adopt {this.state.farmer.name}</p>
                </button>
              </div>
            </Link>
            }
            <div className="row">
              {Auth.isAuthenticated() &&
              <DonationBox
                farmer={this.state.farmer}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              }
              {!Auth.isAuthenticated() &&
                <Link to="/register">
                  <div className="col-md-3">
                    <button className="btn btn-primary">
                      <p>Please Register/Sign In To Donate {this.state.farmer.name}</p>
                    </button>
                  </div>
                </Link>
              }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FarmersShow;
