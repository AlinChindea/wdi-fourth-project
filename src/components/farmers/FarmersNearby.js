import React from 'react';

import Nearby from '../utility/Nearby';

const FarmersNearby = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1>Map with nearby farmers goes here</h1>
          <Nearby />
        </div>
      </div>
    </div>

  );
};

export default FarmersNearby;
