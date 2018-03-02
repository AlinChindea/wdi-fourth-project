import React from 'react';

const DonationBox = ({ handleChange }) => {
  return (
    <div className="col-md-6 offset-md-3">
      <form>
        <div className="form-group">
          <label htmlFor="looking">Farmer offers:</label>
          <br />
          <select onChange={handleChange}>
            <option>Weekend Stay</option>
            <option>Farm Experience</option>
            <option>Produce</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default DonationBox;
