import React from 'react';
import Form from '../../components/shared/Form/Form';


const Login = () => {
  const formBannerStyle = {
    height: '100%',
    width: '100%',
  };
  
  const formContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };
  
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./asset/images/banner1.jpg" alt="loginImage" style={formBannerStyle}/>
        </div>
        <div className="col-md-4 form-container" style={formContainerStyle}>
          <Form
            formTitle={"Login Page"}
            submitBtn={"Login"}
            formType={"login"}
          />
        </div>
      </div>
    </>
  );
}

export default Login;


