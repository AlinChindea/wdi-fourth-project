import React, {Component} from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import ReactFilestack from 'filestack-react';

// import RegisterForm from '../auth/RegisterForm';

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
        this.setState({farmers: filteredFarmers});
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
        .then((res) => console.log(res))
        .catch(err => this.setState({errors: err.response.data.errors}));
    });
  }

  handleSelectTab = ({target: {dataset: { value }}}) => {
    console.log('old state: ', this.state);
    this.setState({activeTab: value});
  }

  render() {
    return(
      <div className="container">
        <div className="row my-2">
          <div className="col-lg-8 order-lg-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a data-target="#profile" data-value="profile" onClick={this.handleSelectTab} data-toggle="tab" className={`nav-link ${this.state.activeTab === 'profile' ? 'active' : ''}`}>Profile</a>
              </li>
              <li className="nav-item">
                <a data-target="#messages" data-toggle="tab" onClick={this.handleSelectTab} data-value="messages"  className={`nav-link ${this.state.activeTab === 'messages' ? 'active' : ''}`}>Messages</a>
              </li>
              <li className="nav-item">
                <a data-target="#edit" data-value="edit" onClick={this.handleSelectTab} data-toggle="tab" className={`nav-link ${this.state.activeTab === 'edit' ? 'active' : ''}`}>Edit</a>
              </li>
            </ul>
            <div className="tab-content py-4">

              {this.state.activeTab === 'profile' &&
              <div className="tab-pane active" id="profile">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Welcome back, {this.state.user.fullname}.</h5>
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
                        <tr>
                          <td>
                            <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>}
              {this.state.activeTab === 'messages' &&
              <div className="tab-pane active" id="messages">
                <div className="alert alert-info alert-dismissable">
                  <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
                </div>
                <table className="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <span className="float-right font-weight-bold">3 hrs ago</span> Here is your a link to the latest summary report from the..
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="float-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="float-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="float-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="float-right font-weight-bold">9/4</span> Maxamillion ais the fix for tibulum tincidunt ullamcorper eros.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>}
              {this.state.activeTab === 'edit' &&
              <div className="tab-pane active" id="edit">
                <form role="form">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">First name</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" value="Jane" readOnly />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" value="Bishop" readOnly/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="email" value="email@gmail.com" readOnly/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Company</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Website</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="url" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" placeholder="Street" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" placeholder="City" />
                    </div>
                    <div className="col-lg-3">
                      <input className="form-control" type="text" placeholder="State" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Time Zone</label>
                    <div className="col-lg-9">
                      <select id="user_time_zone" className="form-control" size="0">
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Username</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="text" value="janeuser" readOnly/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="password" value="11111122333" readOnly/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                    <div className="col-lg-9">
                      <input className="form-control" type="password" value="11111122333" readOnly/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                      <input type="reset" className="btn btn-secondary" value="Cancel" readOnly/>
                      <input type="button" className="btn btn-primary" value="Save Changes" readOnly/>
                    </div>
                  </div>
                </form>
              </div>}
            </div>
          </div>
          <div className="col-lg-4 order-lg-1 text-center">
            <img src={this.state.user.image} className="mx-auto img-fluid img-circle d-block" alt="avatar" />
            <ReactFilestack
              apikey="AO99xY7O6Q56qp05Go2GFz"
              buttonText="Upload a new photo"
              buttonClass="main-button"
              onSuccess={this.handleImageUpload}
              className="form-control"
            />
          </div>
          {/* { this.state.user.image && <div className="col-md-6">
            <h2>Image Preview</h2>
            <img src={this.state.user.image} className="img-fluid" />
          </div> } */}
        </div>
      </div>
    );
  }
}

export default UserProfile;
