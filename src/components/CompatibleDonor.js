import React from "react";
import poster from "../assets/images/poster.jpg";
const CompatibleDonor = () => {
  return (
    <div className="row text-center">
      <div className="col-md-12">
        <h1 className="text-danger learnAboutDonation">Learn About Donation</h1>
      </div>
      <div className="col-sm-6">
        <img src={poster} alt="One Donation Can save upto three lives" className="img-fluid"/>
      </div>
      <div className="col-sm-6" align="center">
        <table className="table table-responsive">
          <tbody>
            <tr className="text-danger text-center">
              <th colSpan={3}>Compatible Blood Type Donor</th>
            </tr>
            <tr>
              <td>
                <b>Blood Type</b>
              </td>
              <td>
                <b>Donate Blood To</b>
              </td>
              <td>
                <b>Receive Blood From</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>A+</b>
              </td>
              <td>A+, AB+</td>
              <td>A+, A-, O+, O-</td>
            </tr>
            <tr>
              <td>
                <b>A-</b>
              </td>
              <td>A-, A+, AB-, AB+	</td>
              <td>A-, O-</td>
            </tr>
            <tr>
              <td>
                <b>B+</b>
              </td>
              <td>B+, AB+</td>
              <td>B+, B-, O+, O-</td>
            </tr>
            <tr>
              <td>
                <b>B-</b>
              </td>
              <td>B-, B+, AB-, AB+</td>
              <td>B-, O-</td>
            </tr>
            <tr>
              <td>
                <b>O+</b>
              </td>
              <td>O+, A+, B+, AB+</td>
              <td>O+, O-</td>
            </tr>
            <tr>
              <td>
                <b>O-</b>
              </td>
              <td>All Blood Types	</td>
              <td>O-</td>
            </tr>
            <tr>
              <td>
                <b>AB+</b>
              </td>
              <td>AB+</td>
              <td>All Blood Types</td>
            </tr>
            <tr>
              <td>
                <b>AB-</b>
              </td>
              <td>AB-, AB+	</td>
              <td>AB-, A-, B-, O-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompatibleDonor;
