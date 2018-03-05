import React from 'react';
import ReactFilestack from 'filestack-react';
import BackButton from '../utility/BackButton';
import GoogleAutocomplete from '../utility/GoogleAutocomplete';

function FarmersForm({ history, handleSubmit, handleChange, farmer, errors, handleFormCheckBox, handleImageUpload, setLatLng }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <BackButton history={history} />
            <div className="col-md-6 col-sm-8 mx-auto">
              <div className="card border-none">
                <div className="card-body">
                  <div className="mt-2 text-center">
                    <h2>Register a farmer</h2>
                  </div>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter full name"
                          value={farmer.name}
                          onChange={handleChange}
                        />
                        { errors.name && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.name}</p>}
                      </div>
                      <div className="form-group">
                        <ReactFilestack
                          apikey="AO99xY7O6Q56qp05Go2GFz"
                          buttonText="Upload a photo"
                          buttonClass="main-button"
                          onSuccess={handleImageUpload}
                          className="form-control"
                        />
                        {errors.image && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.image}</p>}
                      </div>
                      <GoogleAutocomplete setLatLng={setLatLng} />
                      <div className="form-group">
                        <input
                          type="text"
                          readOnly="readonly"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="Address"
                          value={farmer.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.address}</p>}
                      </div>
                      <div className="form-group">
                        <input
                          type="textarea"
                          className="form-control"
                          id="story"
                          name="story"
                          placeholder="Add your story"
                          value={farmer.story}
                          onChange={handleChange}
                        />
                        {errors.story && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.story}</p>}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="target"
                          name="target"
                          placeholder="Enter a donation target"
                          value={farmer.target}
                          onChange={handleChange}
                        />
                        {errors.looking && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.looking}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="looking">Farmer offers:</label>
                        <br />
                        Produce <input type="checkbox" name="Produce" value="produce" checked={farmer.offer.produce} onChange={handleFormCheckBox}/>
                        {' '}
                        Weekend Stay <input type="checkbox" name="Weekend Stay" value="weekendStay" checked={farmer.offer.weekendStay} onChange={handleFormCheckBox}/>
                        {' '}
                        Farm Experiences <input type="checkbox" name="Farm Experiences" value="farmExperience" checked={farmer.offer.farmExperience} onChange={handleFormCheckBox}/>
                      </div>
                      {errors.offer && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.offer}</p>}
                      <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          value={farmer.email}
                          onChange={handleChange}
                        />
                        { errors.email && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.email}</p>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="number"
                          name="number"
                          value={farmer.number}
                          onChange={handleChange}
                        />
                        { errors.number && <p className="alert alert-warning" role="alert"><i className="fa fa-exclamation-triangle"></i> {errors.number}</p>}
                      </div>
                      <div>
                        <button disabled={formIsInvalid} className="btn btn-primary float-right">Save</button>
                      </div>
                    </form>
                    { farmer.image && <div className="col-md-6">
                      <h2>Image Preview</h2>
                      <img src={farmer.image} className="img-fluid" />
                    </div> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FarmersForm;
