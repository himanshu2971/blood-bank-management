import React, { useState } from 'react';

//dummy dataList for BloodBank 
const bloodBanks = [
  { name: 'Bengaluru Blood Bank', location: '560001' },
  { name: 'Kalyan Nagar Blood Bank', location: '560043' },
  { name: 'Chelekere Blood Bank', location: '560045' },
];

// 
const BloodBankPage = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const filteredBanks = selectedBank  //Filters the BloodBanks array based on selected location 
    ? bloodBanks.filter((bank) => bank.location === selectedBank)
    : bloodBanks;

  const handleBankChange = (event) => setSelectedBank(event.target.value);  //Updates the selected bank 

  return (
    <div>
      <label className='my-3'>
        Select a blood bank : &nbsp;
        <select value={selectedBank} onChange={handleBankChange}>
          <option value="">All blood banks</option>
          {bloodBanks.map((bank) => (
            <option key={bank.location} value={bank.location}>
              {bank.location}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {filteredBanks.map((bank) => (   //Filtered  list of BloodBanks selected by the user as per PIN Code 
          <li key={bank.location}>
            {bank.name} ({bank.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodBankPage;

//Have to implement card view to Show BloodBanks for Selected Pin Code