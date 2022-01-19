import React, { useState, useContext } from 'react';
import Java from './Java';
import Asp from './Asp';
import C from './C';
import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { multiStepContext } from '../StepContext';

const SecondStep = () => {
  function handleThirdForm() {
    if (!userData.course) return;
    setStep(3);
  }

  const [course, setcourse] = useState('java');
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <label>enter the collage name</label>
      <br />
      <input
        type="text"
        value={userData['cname']}
        onChange={(e) => setUserData({ ...userData, cname: e.target.value })}
      />

      <div className="radio-btn-container">
        <div className="radio-btn">
          <input
            type="radio"
            name="course"
            checked={userData.course === 'java'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, course: 'java' }))
            }
          />
          java
        </div>

        <div className="radio-btn">
          <input
            type="radio"
            name="course"
            checked={userData.course === 'c++'}
            onChange={() => setUserData((prev) => ({ ...prev, course: 'c++' }))}
          />
          c++
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            name="course"
            checked={userData.course === 'ASP'}
            onChange={() => setUserData((prev) => ({ ...prev, course: 'ASP' }))}
          />
          ASP
        </div>
      </div>
      <label> your selected course is</label>
      <br />
      <input type="text" value={userData.course} />

      <div>
        <button
          variant="contained"
          onClick={() => setStep(1)}
          color="secondary"
        >
          {' '}
          previous{' '}
        </button>
        <button variant="contained" onClick={handleThirdForm} color="primary">
          {' '}
          next{' '}
        </button>
        <span></span>
      </div>
    </div>
  );
};

export default SecondStep;
