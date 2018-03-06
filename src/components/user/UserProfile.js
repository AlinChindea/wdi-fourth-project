import React, {Component} from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import ReactFilestack from 'filestack-react';

// import RegisterForm from '../auth/RegisterForm';
import BackButton from '../utility/BackButton';

class UserProfile extends Component {
  state = {
    user: {},
    farmers: [],
    activeTab: 'profile'
  }

  componentWillMount() {
    const token = Auth.getPayload();
    Axios
      .get(`/api/users/${token.userId}`)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get('/api/farmers')
      .then(res => {
        const filteredFarmers = res.data.filter(farmer => this.state.user.adopted.some(adoptedFarmerId => farmer.id === adoptedFarmerId));
        this.setState({farmers: filteredFarmers}, () => console.log(this.state.farmers));
      })
      .catch(err => console.log(err));
  }

  handleImageUpload = result => {
    const user = Object.assign({}, this.state.user, { image: result.filesUploaded[0].url});
    this.setState({ user}, () => {
      const userUpdate = {image: this.state.user.image};
      Axios
        .put(`/api/users/${this.props.match.params.id}`, userUpdate, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
        .then(res => this.setState(res.data))
        .catch(err => this.setState({errors: err.response.data.errors}));
    });
  }

  handleSelectTab = ({target: {dataset: { value }}}) => {
    this.setState({activeTab: value});
  }

  render() {
    let donationData = [];
    if(!this.state.farmers[0]) {
      return false;
    } else {
      this.state.farmers.map((farmer, i) => {
        farmer.donations.map((donate, i) => {
          if(donate.userId === this.props.match.params.id) {
            donationData.push([farmer.name, donate.donationAmount, donate.product]);
            // return <p key={i}>{donate.userId}</p>;
          }
          return;
        });
      });
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-9 col-sm-12">
            <BackButton history={this.props.history}/>
          </div>
        </div>
        <br />

        <div className="row my-2">
          <div className="col-lg-8 order-lg-2">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <a data-target="#profile" data-value="profile" onClick={this.handleSelectTab} data-toggle="tab" className={`nav-link ${this.state.activeTab === 'profile' ? 'active' : ''}`}>Profile</a>
              </li>
              <li className="nav-item">
                <a data-target="#donations" data-toggle="tab" onClick={this.handleSelectTab} data-value="donations"  className={`nav-link ${this.state.activeTab === 'donations' ? 'active' : ''}`}>Donations</a>
              </li>
            </ul>
            <div className="tab-content py-4">

              {this.state.activeTab === 'profile' &&
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Welcome back, {this.state.user.fullname}. 🚜 </h5>
                  </div>

                  <div className="col-md-6">

                    <hr />
                  </div>
                  <div className="col-md-12">
                    <h5 className="mt-2"><span className="fa fa-clock-o ion-clock float-right"></span> Your adopted farmers</h5>
                    <table className="table table-sm table-hover table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <ul>
                              {this.state.farmers && this.state.farmers.map((farmer, i) => {
                                return(<li key={i}>{farmer.name}</li>);
                              })}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>}
              {this.state.activeTab === 'donations' &&
              <div className="tab-pane active" id="donations">
                <div className="alert alert-info alert-dismissable">
                  <a className="panel-close close" data-dismiss="alert">×</a> These are your Donations:
                </div>
                <div>
                  { donationData[0] && donationData.map((data, i) =>
                    <div key={i}>
                      <ul>
                        { data.map((d, i) => {
                          if(d === 'weekendStay' || d === 'produce' || d === 'farmExperience') {
                            const titleCase = d.replace( /([A-Z])/g, ' $1' );
                            const result =  titleCase.charAt(0).toUpperCase() + titleCase.slice(1);
                            return <li key={i}>{[result]}</li>;
                          } else {
                            return <li key={i}>{d}</li>;
                          }
                        })
                        }
                      </ul>
                    </div>
                  )}
                </div>
              </div>}
            </div>
          </div>
          <div className="col-lg-4 order-lg-1 text-center">
            <img src={this.state.user.image} className="mx-auto img-fluid img-circle d-block image-max-min" alt={this.state.user.name} />
            <ReactFilestack
              apikey="AO99xY7O6Q56qp05Go2GFz"
              buttonText="Upload a new photo"
              buttonClass="btn-primary"
              onSuccess={this.handleImageUpload}
              className="form-control"
            />
            {' '}
            <button className="btn btn-outline-primary"><i className="fa fa-pencil" aria-hidden="true"></i>Edit profile</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
