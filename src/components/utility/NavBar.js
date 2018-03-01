import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';

const navBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Farmers Friends</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/farmers" className="nav-link">Farmers <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/farmers/new" className="nav-link">Add New Farmer</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/farmers" className="nav-link" onClick={Auth.logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
