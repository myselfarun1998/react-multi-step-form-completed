import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { multiStepContext } from '../StepContext';

const FirstStep = () => {
  const [gender, setGender] = useState('male');
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  console.log(userData);
  return (
    <div>
      <label> Enter the name</label>
      <br />
      <input
        type="text"
        value={userData['name']}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <br />
      <label> Enter the mail</label> <br />
      <input
        type="email"
        value={userData['email']}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <div className="radio-btn-container">
        <div className="radio-btn">
          <label> select the gender</label>
          <br />
          <input
            type="radio"
            name="gender"
            checked={userData.gender === 'Male'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, gender: 'Male' }))
            }
          />
          Male
        </div>

        <div className="radio-btn">
          <input
            type="radio"
            // value={gender}
            name="gender"
            checked={userData.gender === 'Female'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, gender: 'Female' }))
            }
          />
          Female
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            name="gender"
            checked={userData.gender === 'Others'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, gender: 'Others' }))
            }
          />
          Others
        </div>
      </div>
      <label>select your country</label> <br />
      <select
        value={userData['country1']}
        onChange={(e) => {
          setUserData({ ...userData, country1: e.target.value });
        }}
      >
        <option hidden>--Select country--</option>
        <option value="India">India</option>
        <option value="UK">Uk</option>
        <option value="US">US</option>
        <option value="Russia">Russia</option>
        <option value="Canada">Canada</option>
        <option value="Turkey">Turkey</option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Iran">Iran</option>
        <option value="china">China</option>
      </select>
      <br />
      <br />
      <label>select your State</label> <br />
      <select
        // defaultValue="select"
        value={userData['state']}
        onChange={(e) => setUserData({ ...userData, state: e.target.value })}
      >
        <option hidden>--Select your state--</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Andaman and Nicobar Islands">
          Andaman and Nicobar Islands
        </option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
      </select>
      <br />
      <br />
      {/* <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl> */}
      <div>
        <button variant="contained" onClick={() => setStep(2)} color="primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
