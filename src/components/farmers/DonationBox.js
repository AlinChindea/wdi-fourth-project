import React from 'react';

const DonationBox = ({ farmer, handleChange, handleSubmit }) => {
  // console.log(farmer.sponsored);
  return (
    <div className="col-md-6 offset-md-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="looking">Farmer offers:</label>
          <br />
          {farmer.sponsored &&
          <select
            className="form-control"
            id="product"
            name="product"
            value={farmer.sponsored.product}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option name="product" value="weekendStay">Weekend Stay</option>
            <option name="product" value="farmExperience">Farm Experience</option>
            <option name="product" value="produce">Produce</option>
          </select>
          }
          {farmer.sponsored &&
          <select
            className="form-control"
            id="donationAmount"
            name="donationAmount"
            value={farmer.sponsored.donationAmount}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option name="donationAmount" value="50">£50</option>
            <option name="donationAmount" value="100">£100</option>
            <option name="donationAmount" value="200">£200</option>
          </select>
          }
        </div>
        <div>
          <button className="btn btn-primary show-btn-add">Save</button>
        </div>
      </form>
    </div>
  );
};

export default DonationBox;
