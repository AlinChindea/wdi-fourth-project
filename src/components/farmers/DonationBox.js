import React from 'react';

const DonationBox = ({ newDonation, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="looking">Farmer offers:</label>
        <br />
        <select
          className="form-control"
          id="product"
          name="product"
          value={newDonation.product}
          onChange={handleChange}
          defaultValue={newDonation.product}
        >
          <option value="" disabled>Please Select</option>
          <option name="product" value="weekendStay">Weekend Stay</option>
          <option name="product" value="farmExperience">Farm Experience</option>
          <option name="product" value="produce">Produce</option>
        </select>
        <select
          className="form-control"
          id="donationAmount"
          name="donationAmount"
          value={newDonation.donationAmount}
          onChange={handleChange}
          defaultValue={newDonation.donationAmount}
        >
          <option value="" disabled>Please Select</option>
          <option name="donationAmount" value="50">£50</option>
          <option name="donationAmount" value="100">£100</option>
          <option name="donationAmount" value="200">£200</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary show-btn-add btn-block">Save</button>
      </div>
    </form>

  );
};

export default DonationBox;
