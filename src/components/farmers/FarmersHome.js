import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const FarmersHome = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <Link to="/farmers"><img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" /></Link>
            <h3>Find a farmer</h3>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <Link to="/farmers/new"><img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" /></Link>
            <h3>Refer a farmer</h3>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card">
            <Popup trigger={<div><img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" />
              <h3>How it works</h3> </div>} modal position="top center" closeOnDocumentClick>
              {close => (
                <h3>How it works content goes here
                  <a className="close" onClick={close}>
                  &times;
                  </a>
                </h3>
              )}
            </Popup>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <Link to="/login"><img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" />
            </Link>
            <h3>Login/Register</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersHome;
