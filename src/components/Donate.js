import React from 'react'
import './Donate.css'
import poster from "../assets/images/poster.jpg";
function Donate() {
  return (
    <div className='container-fluid my-2' style={{backgroundColor: "#FAE8E0"}}>
        <div className='row'>
            <div className='container-fluid my-5'>
                <div className='title text-center'>
                    <p className='title-one'><b>Urgent Need for Blood and Platelet Donor</b></p>
                    <p className='title-two'>Want to watch a miracle? Come and donate blood.</p>
                </div>
                <div className='NearestCentre text-center'>
                    <p>Enter your Aadhar Number and PIN Code to Book an Appointment</p>
                    <form>
                        <label>
                            Aadhar Number: &nbsp;&nbsp;
                            <input className='my-1' type='number' name='aadhar' placeholder='Aadhar Number' /><br></br>
                            PIN Code: &nbsp;&nbsp;
                            <input className='my-1' type='number' name='pin' fields={6}  placeholder='PIN Code' />
                        </label><br></br>
                        <button className='my-2 appointment-button'>Make an Appointment</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Donate