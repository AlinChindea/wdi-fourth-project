import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../utility/Modal';

const FarmersHome = () => {
  return(
    <section className="hero">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-4">
            <div className="card border-none">
              <Link to="/farmers"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/find-on-map.png' />
                <h3>Find a farmer</h3>
              </div>
              </Link>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <Link to="/farmers/new"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/recommendation.png' />
                <h3>Refer a farmer</h3>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-100"></div>

        <div className="row justify-content-around">
          <div className="col-4">
            <div className="card">
              <Modal />
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <Link to="/login"><div className="card-body text-center">
                <img className="cardIcon" src='../assets/registration.png' />
                <h3>Sign in/Sign up</h3>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmersHome;
