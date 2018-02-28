import React from 'react';

import BackButton from '../utility/BackButton';

function FarmersForm({ history, handleSubmit, handleChange, farmer, errors, handleFormCheckBox }) {
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
            <label htmlFor="target">Target</label>
            <input
              type="number"
              className="form-control"
              id="target"
              name="target"
              value={farmer.target}
              onChange={handleChange}
            />
            {errors.looking && <p className="alert alert-warning" role="alert">{errors.looking}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="looking">Farmer offers:</label>
            <br />
            Produce <input type="checkbox" name="Produce" value="produce" checked={farmer.offer.produce} onChange={handleFormCheckBox}/>
            <br />
            Weekend Stay <input type="checkbox" name="Weekend Stay" value="weekendStay" checked={farmer.offer.weekendStay} onChange={handleFormCheckBox}/>
            <br />
            Farm Experiences <input type="checkbox" name="Farm Experiences" value="farmExperience" checked={farmer.offer.farmExperience} onChange={handleFormCheckBox}/>
            <br />

          </div>
          {errors.offer && <p className="alert alert-warning" role="alert">{errors.offer}</p>}

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
            { errors.name && <p className="alert alert-warning" role="alert">{errors.name}</p>}
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
            { errors.name && <p className="alert alert-warning" role="alert">{errors.name}</p>}
          </div>

          <div>
            <button disabled={formIsInvalid} className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FarmersForm;
