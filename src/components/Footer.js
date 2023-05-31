// Have to make the footer sticky 
import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  const footerStyle ={
    
    left: '0',
    bottom: '0',
    marginTop: '5px',
    padding: '10px',
    backgroundColor: 'black',
    color:"white",
    // position: 'sticky',
    zIndex: '100',
  }
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className='text-center footer' style={footerStyle}>
      <h3 className='text-center'> {year} Blood Bank Management App &copy; Himanshu Shourabh</h3>
      <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | 
        <Link to="/policy"> Privacy Policy </Link>
      </p>
    </footer>
  );
}

export default Footer;





