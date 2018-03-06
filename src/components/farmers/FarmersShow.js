import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import {Nav, NavItem} from 'react-bootstrap';

import GoogleMap from '../utility/GoogleMap';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';
import DonationBox from './DonationBox';
import DonationTotal from './DonationTotal';
import CommentsForm from '../utility/CommentsForm';


class FarmersShow extends Component {
  state = {
    farmer: {},
    center: {
      lat: null,
      lng: null
    },
    user: {},
    newDonation: {
      donationAmount: '',
      product: ''
    },
    newComment: {
      content: ''
    }
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

  handleChange = ({ target: { value, name}}) => {
    const newDonation = Object.assign({}, this.state.newDonation, { [name]: value });

    this.setState({ newDonation });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/farmers/${this.props.match.params.id}/donations`, this.state.newDonation, { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(res => {
        const farmer = Object.assign({}, this.state.farmer, { donations: res.data.donations });
        this.setState({ farmer });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => this.setState({ farmer: res.data, center: {lat: res.data.location.lat, lng: res.data.location.lng}}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    if (!Auth.isAuthenticated()) return false;

    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }

  userHasAdopted = () => {
    return this.state.user.adopted && this.state.user.adopted.includes(this.props.match.params.id);
  }

  deleteComment = (id) => {
    Axios
      .delete(`/api/farmers/${this.props.match.params.id}/comments/${id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(() => {
        const comments = this.state.farmer.comments.filter(comment => comment._id !== id);


        const farmer = Object.assign({}, this.state.farmer, { comments });
        this.setState({ farmer });
      })
      .catch(err => console.log(err));
  }

  handleCommentChange = ({ target: { value }}) => {
    this.setState({ newComment: { content: value }});
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    Axios
      .post(`/api/farmers/${this.state.farmer.id}/comments`, this.state.newComment,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => {
        const farmer = Object.assign({}, this.state.farmer, { comments: this.state.farmer.comments.concat(res.data) });
        this.setState({ farmer, newComment: { content: '' } });
      })
      .catch(err => console.log(err));
  }

  render() {
    let isCurrentUsers = null;
    if (Auth.isAuthenticated() && this.state.farmer.createdBy) isCurrentUsers = Auth.getPayload().userId === this.state.farmer.createdBy.id;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-9 col-sm-12">
            <BackButton history={this.props.history}/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img src={this.state.farmer.image} className="img-fluid showImg"/>
            <br />
            <h3><strong>{this.state.farmer.name}</strong></h3>
            <div className="row">
              <div className="col-5 offset-1">
                {this.state.farmer.id && isCurrentUsers &&
                <button className="btn btn-success btn-sm btn-block">
                  <Link to={`/farmers/${this.state.farmer.id}/edit`}><i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </button>}
              </div>
              <div className="col-5">
                {this.state.farmer.id && isCurrentUsers &&
                <button className="btn btn-danger btn-sm btn-block" onClick={this.deleteFarmer}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>}
              </div>
            </div>
            <br />
            <p><em>{this.state.farmer.story}</em></p>
            <p><span className="farmer-show-target">Looking for: £{this.state.farmer.target}</span></p>
            <div className="row">
              <div className="col-6">
                <p><em>We are offering:</em></p>
              </div>
              <div className="col-6">
                <ul className="farmer-offer-list">
                  {this.state.farmer.offer &&  Object.keys(this.state.farmer.offer).map((keyName, i) => {
                    const titleCase = keyName.replace( /([A-Z])/g, ' $1' );
                    const result =  titleCase.charAt(0).toUpperCase() + titleCase.slice(1);
                    return <li key={i}>{[result]}</li>;
                  }
                  )}
                </ul>
              </div>
            </div>
            {this.state.farmer.contact && <p><em>Contact Us at: {this.state.farmer.contact.email} or {this.state.farmer.contact.number}</em></p>}
          </div>
          <div className="col-md-7 col-sm-12">
            {!this.state.center.lat && <h1>map loading...</h1>}
            {this.state.center.lat &&
            <GoogleMap center={this.state.center}/>}
            <br />
            <div className="col-12">
              {Auth.isAuthenticated() && !this.userHasAdopted() && <button className="btn btn-primary btn-sm btn-block" onClick={this.adoptFarmer}>ADOPT!</button>}
              {Auth.isAuthenticated() && this.userHasAdopted() && <button className="btn btn-success btn-sm btn-block">Thanks for Adopting</button>}
            </div>
            <br />
            {Auth.isAuthenticated() &&
              <div className="col-12">
                <DonationBox
                  newDonation={this.state.newDonation}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            }
            {!Auth.isAuthenticated() &&
              <div className="col-12">
                <p>To Donate to: {this.state.farmer.name}</p>
                <Link to="/register">
                  <button className="btn btn-success btn-sm btn-block">
                    Please Register/Sign In
                  </button>
                </Link>
              </div>
            }
          </div>
        </div>
        <br />
        <DonationTotal
          farmer={this.state.farmer}
        />

        <br />
        <div className="row">
          <div className="col-10">
            {this.state.farmer.comments && this.state.farmer.comments.map(comment => {
              return(
                <div key={comment._id} className="comment">
                  <p>{comment.content} </p>
                  <p><strong>{comment.createdBy.username}</strong></p>
                  { Auth.isAuthenticated() && Auth.getPayload().userId === comment.createdBy.id && <button className="btn btn-outline-danger btn-sm" onClick={() => this.deleteComment(comment._id)}>
                    Delete</button>}
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        { Auth.isAuthenticated() &&
        <div className="col-sm-12">
          <CommentsForm
            handleCommentChange={ this.handleCommentChange }
            handleCommentSubmit={ this.handleCommentSubmit }
            newComment={ this.state.newComment }
          />
        </div>
        }

      </div>
    );
  }
}

export default FarmersShow;
