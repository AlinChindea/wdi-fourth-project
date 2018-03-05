import React from 'react';

const DonationTotal = ({ farmer }) => {
  if (!farmer.donations) return false;

  const total = farmer.donations.reduce((acc, donation) => {
    return acc + donation.donationAmount;
  }, 0);

  const percentOfTarget = (Math.round((total / farmer.target) * 100)) + '%';

  console.log(percentOfTarget);

  return (
    <div className="row">
      <div className="col-12">
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${percentOfTarget}` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4>Total Donations Received: £{total}</h4>
      </div>
    </div>
  );
};

export default DonationTotal;
