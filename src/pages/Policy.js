import React from 'react'


const Policy = () => {
  return (
    <div>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="../asset/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At Blood Bank , we respect the privacy of our users
            and are committed to protecting their personal information. This
            Privacy Policy outlines how we collect, use, store, and disclose the
            information we obtain from users of our website and services. By
            accessing or using our website, you agree to the terms and practices
            described in this policy.
          </p>
          <ol>
            <li>
              Information We Collect - Personal Information, Usage Data
            </li>
            <li>
              Use of Information - Personalization, Marketting
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Policy;