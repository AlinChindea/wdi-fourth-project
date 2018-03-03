import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';
import FarmersRoutes from './components/farmers/FarmersRoutes';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/utility/NavBar';

class App extends React.Component {
  state = {
    farmers: []
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavBar props={this.state}/>
            <Link to="/" className="text-center"> <img src='../assets/tractor-logo.png' className="tractor-logo" /></Link>

          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <FarmersRoutes />
          </main>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
