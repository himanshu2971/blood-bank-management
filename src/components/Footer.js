// Have to make the footer sticky 
import React from 'react';

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className='text-center footer my-2' style={{backgroundColor:"#C0DBEA"}}>
      <p> {year} Blood Bank Management App</p>
      <p> &copy; Himanshu Shourabh</p>
    </footer>
  );
}

export default Footer;





