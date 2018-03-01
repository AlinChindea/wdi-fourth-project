import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';
import FarmersRoutes from './components/farmers/FarmersRoutes';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/utility/NavBar';
import Auth from './lib/Auth';

class App extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    const user = Auth.getPayload();
    Axios
      .get(`/api/users/${user.userId}`)
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user}/>
          <h1>Farmers Friends</h1>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <FarmersRoutes />
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
