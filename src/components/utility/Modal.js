import React from 'react';
import Popup from 'reactjs-popup';

const Modal = () => {
  return(
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
  );
};

export default Modal;
