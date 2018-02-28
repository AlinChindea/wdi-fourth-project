import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './scss/style.scss';
import FarmersRoutes from './components/farmers/FarmersRoutes';
import FarmersHome from './components/farmers/FarmersHome';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>WDI Project 4</h1>
          <Route exact path="/" component={FarmersHome} />
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
