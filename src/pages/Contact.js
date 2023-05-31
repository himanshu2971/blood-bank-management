import React from "react";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
//icons are imported from Bi librabry
const Contact = () => {
  return (
    <div>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="../asset/images/contactus.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4 my-5">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query or need info about any product ,feel free to reach us
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@bloodbankapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
