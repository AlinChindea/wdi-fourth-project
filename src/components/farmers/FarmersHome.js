import React from 'react';
// import { Switch, Route } from 'react-router-dom';

const FarmersHome = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" />
            <h3>Find a farmer</h3>
          </div>
        </div>

        <div className="col-4">
          <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="https://goo.gl/e55njh" alt="tractors in field" />
            <h3>Refer a farmer</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="https://goo.gl/UBNMkn" alt="tractors in field" />
            <h3>How it works</h3>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="https://goo.gl/r7xW6x" alt="tractors in field" />
            <h3>Login/Register</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FarmersHome;
