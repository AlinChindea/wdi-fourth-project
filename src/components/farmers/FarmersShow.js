import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';

class FarmersShow extends Component {
  state = {
    farmer: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/farmers/${this.props.match.params.id}`)
      .then(res => this.setState({ farmer: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <img src={this.state.farmer.image} className="img-responsive"/>
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
      </div>

    );
  }
}

export default FarmersShow;
