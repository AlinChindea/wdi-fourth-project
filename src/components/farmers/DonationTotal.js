import React from 'react';

const DonationTotal = ({ farmer }) => {
  if (!farmer.donations) return false;

  const total = farmer.donations.reduce((acc, donation) => {
    return acc + donation.donationAmount;
  }, 0);

  return (
    <div className="row">
      <div className="col-12">
        <h4>Total Donations Received: £{total}</h4>
      </div>
    </div>
  );
};

export default DonationTotal;
