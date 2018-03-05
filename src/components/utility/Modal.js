import React from 'react';
import Popup from 'reactjs-popup';

const Modal = () => {
  return(
    <Popup trigger={<div><div className="card-body text-center">
      <img className="cardIcon" src='../assets/farmers.png' />
      <h3>How it works</h3>
    </div>
    </div>} modal position="bottom center" closeOnDocumentClick>
      {close => (
        <div className="container">
          <h3 className="text-center modal-title">How it works
            <a className="close" onClick={close}>
          &times;
            </a>
          </h3>
          <div className="row justify-content-md-center">
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/id-card.png' />
              <p>1. We identify farmers around major cities</p>
            </div>
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/farmer-registration.png' />
              <p>2. They register.</p>
            </div>
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/showcase.png' />
              <p>3. We showcase their work</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/browsing.png' />
              <p>4. You browse farmers around you</p>
            </div>
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/selection.png' />
              <p>5. You adopt a farmer, committing to buy from them or enjoy other benefits</p>
            </div>
            <div className="col-md-4 modal-font-color text-center">
              <img src='../assets/discussion.png' />
              <p>6. You connect with the farmer</p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;
