import React from 'react';

const DonationBox = ({ handleFormCheckBox }) => {
  return (
    <div className="col-md-6 offset-md-3">
      <form>
        <div className="form-group">
          <label htmlFor="looking">Farmer offers:</label>
          <br />
          <select>
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
