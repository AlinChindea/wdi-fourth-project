import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';
import { stack as Menu } from 'react-burger-menu';

class navBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return(
      <Menu isOpen={ false }>
        <Link to="/" className="menu-item">Farmers Friends</Link>
        <Link to="/farmers" className="menu-item"><img src='../assets/farmer-menu.png' /> Farmers</Link>
        {Auth.isAuthenticated() &&
        <Link to="/farmers/new" className="menu-item"><img src='../assets/add-farmer.png' /> Add New Farmer</Link>}
        {!Auth.isAuthenticated() &&
        <Link to="/register" className="menu-item"><img src='../assets/account.png' /> Register</Link>}
        {!Auth.isAuthenticated() &&
        <Link to="/login" className="menu-item"><img src='../assets/login.png' /> Login</Link>}
        {Auth.isAuthenticated() &&
        <Link to={`/users/${Auth.getPayload().userId}`} className="menu-item"><img src='../assets/profile.png' /> Profile</Link>}
        {Auth.isAuthenticated() &&
        <Link to="/farmers" className="menu-item" onClick={Auth.logout}><img src='../assets/logout.png' /> Logout</Link>}
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default navBar;
