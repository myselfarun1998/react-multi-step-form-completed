import React, { useState } from 'react';
import App from './App';
export const multiStepContext = React.createContext();

const initialUserData = {
  name: '',
  email: '',
  gender: '',
  country: '',
  state: '',
  district: '',
  country1: '',
};

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState(initialUserData);
  const [finalData, setFinalData] = useState([]);
  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData(initialUserData);
    setStep(1);
  }
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
