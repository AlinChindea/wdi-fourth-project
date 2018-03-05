import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';
import FarmersRoutes from './components/farmers/FarmersRoutes';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/utility/NavBar';
// import BackButton from './components/utility/BackButton';

class App extends React.Component {
  state = {
    farmers: []
  }

  render() {
    return (
      <Router>
        <div >
          <header className="site-header">
            <NavBar props={this.state}/>
            <Link to="/" className="nav-logo">
              <h1 className="appName">Farmer</h1>
              <img src='../assets/tractor-logo.png' className="tractor-logo" />
              <h1 className="appSurName">Friends</h1>
              {/* <BackButton history={history} />} */}
            </Link>
          </header>
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
