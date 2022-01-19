import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { multiStepContext } from '../StepContext';

const Java = () => {
  const [framework, setFramework] = useState('spring boot');
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <label>refferal code</label>
      <br />
      <input
        type="text"
        value={userData['refferal']}
        onChange={(e) => setUserData({ ...userData, refferal: e.target.value })}
      />
      <div className="radio-btn-container">
        <div className="radio-btn">
          <label>Select Your JAVA frameWork</label>
          <br />
          <input
            type="radio"
            name="framework"
            checked={userData.framework === 'spring boot'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, framework: 'spring boot' }))
            }
          />
          spring boot
        </div>

        <div className="radio-btn">
          <input
            type="radio"
            name="framework"
            checked={userData.framework === 'hybernet'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, framework: 'hybernet' }))
            }
          />
          hybernet
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            name="framework"
            checked={userData.framework === 'servlet'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, framework: 'servlet' }))
            }
          />
          servlet
        </div>
      </div>
      <label>select your price</label> <br />
      <select
        value={userData['price']}
        onChange={(e) => {
          setUserData({ ...userData, price: e.target.value });
        }}
      >
        <option hidden>--Select Price--</option>
        <option value="spring boot-12,000">spring boot-12,000</option>
        <option value="hybernet-15,000">hybernet-15,000</option>
        <option value="servlet-20,000">servlet-20,000</option>
      </select>
      <br />
      <br />
      <div>
        <button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Previous
        </button>{' '}
        <span></span>
        <button variant="contained" onClick={submitData} color="primary">
          Pay:{userData.price}
        </button>
      </div>
    </div>
  );
};

export default Java;
