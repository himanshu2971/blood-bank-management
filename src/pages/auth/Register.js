import React from "react";
import Form from "../../components/shared/Form/Form";

const Register = () => {
  const formBannerStyle = {
    height: '100%',
    width: '100%',
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner ">
          <img src="../asset/images/banner2.jpg" alt="registerImage" style={formBannerStyle}/>
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;


