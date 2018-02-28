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
                <div className="container">
                  <h3 className="text-center">How it works
                    <a className="close" onClick={close}>
                  &times;
                    </a>
                  </h3>
                  <div className="row justify-content-md-center">
                    <div className="col-sm-3">
                      1. We identify farmers around major cities
                    </div>
                    <div className="col-sm-3">
                      2. They register.
                    </div>
                    <div className="col-sm-3">
                      3. We showcase their work
                    </div>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-sm-3">
                      4. You browse farmers around you
                    </div>
                    <div className="col-sm-3">
                      5. You adopt a farmer, committing to buy from them or enjoy other benefits
                    </div>
                    <div className="col-sm-3">
                      6. You chat in platform with the farmer
                    </div>
                  </div>
                </div>
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
