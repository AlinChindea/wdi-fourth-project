import React    from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';
import FarmersRoutes from './components/farmers/FarmersRoutes';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>WDI Project 4</h1>
        <FarmersRoutes />

      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
