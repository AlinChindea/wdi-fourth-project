import React from 'react';

import BackButton from '../utility/BackButton';

function FarmersForm({ history, handleSubmit, handleChange, farmer, errors }) {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div className="container">
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton history={history} />
        </div>
        <form onSubmit={handleSubmit} className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={farmer.name}
              onChange={handleChange}
            />
            { errors.name && <p className="alert alert-warning" role="alert">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={farmer.image}
              onChange={handleChange}
            />
            {errors.image && <p className="alert alert-warning" role="alert">{errors.image}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="story">Story</label>
            <input
              type="textarea"
              className="form-control"
              id="story"
              name="story"
              value={farmer.story}
              onChange={handleChange}
            />
            {errors.story && <p className="alert alert-warning" role="alert">{errors.story}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="looking">Donor needed</label>
            <input
              type="text"
              className="form-control"
              id="looking"
              name="looking"
              value={farmer.looking}
              onChange={handleChange}
            />
            {errors.looking && <p className="alert alert-warning" role="alert">{errors.looking}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="looking">Farmer offer</label>
            <select
              className="form-control"
              id="offer"
              name="offer"
              value={farmer.offer}
              onChange={handleChange}
            >
              <option value="" disabled>Please select</option>
              <option>Produce</option>
              <option>Weekend hosting</option>
            </select>
          </div>
          {errors.offer && <p className="alert alert-warning" role="alert">{errors.offer}</p>}
          <div>
            <button disabled={formIsInvalid} className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmersForm;
