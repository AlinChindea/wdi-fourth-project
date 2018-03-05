import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import {Nav, NavItem} from 'react-bootstrap';

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

    Axios
      .put(`/api/farmers/${this.props.match.params.id}`, this.state.farmer)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }

  componentWillMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => this.setState({ farmer: res.data, center: {lat: res.data.location.lat, lng: res.data.location.lng}}))
      .catch(err => console.log(err));
  }

  handleUserId = () => {
    const sponsored = Object.assign({}, this.state.farmer.sponsored, { userId: Auth.getPayload().userId });

    const farmer = Object.assign({}, this.state.farmer, { sponsored });
    console.log(farmer);

    // this.setState({ farmer }, () => console.log(this.state.farmer));
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={this.state.farmer.image} className="img-fluid showImg"/>
            <br />
            <h3><strong>{this.state.farmer.name}</strong> <button className="btn btn-success btn-sm">
              <Link to={`/farmers/${this.state.farmer.id}/edit`} ><i className="fa fa-pencil" aria-hidden="true"></i>
              </Link>
            </button>{' '} <button className="btn btn-danger btn-sm" onClick={this.deleteFarmer}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button></h3>
            <p><em>{this.state.farmer.story}</em></p>
            <p><em>Looking for: £{this.state.farmer.target}</em></p>
            <p><em>We are offering:</em></p>
            <ul>
              {this.state.farmer.offer &&  Object.keys(this.state.farmer.offer).map((keyName, i) =>
                <li key={i}>{[keyName]}</li>
              )}
            </ul>
            {this.state.farmer.contact && <p><em>Contact Us at: {this.state.farmer.contact.email} or {this.state.farmer.contact.number}</em></p>}

          </div>
          <div className="col-7">
            {!this.state.center.lat && <h1>map loading...</h1>}
            {this.state.center.lat &&
            <GoogleMap center={this.state.center}/>}
          </div>
        </div>

        <br />

        <div className="row">
          {Auth.isAuthenticated() &&
              <div className="col-md-3">
                <button className="btn btn-primary" onClick={this.adoptFarmer}>
                  <p>ADOPT!</p>
                </button>
                <DonationBox
                  farmer={this.state.farmer}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
          }
          {!Auth.isAuthenticated() &&

                <div className="col-md-3">
                  <Link to="/register">
                    <button className="btn btn-success btn-sm">
                      Please Register/Sign In To Adopt or Donate To {this.state.farmer.name}
                    </button>
                  </Link>
                </div>

          }
        </div>
      </div>
    );
  }
}

export default FarmersShow;
