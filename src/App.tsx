import { FormEvent, useState } from 'react';
import './App.css';
import { AccountForm } from './form/AccountForm';
import { AddressForm } from './form/AddressForm';
import { UserForm } from './form/UserForm';

import { useMultistepForm } from './hooks/useMultiStepForm';
import { IFormData } from './interface/formData.interface';

const INITIAL_DATA: IFormData = {
  firstName: '',
  lastName: '',
  age: 10,
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<IFormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const submitForm = (data: IFormData) => {
    console.log(data);

    alert('Submitted');
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      submitForm(data);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        fontFamily: 'Arial',
      }}
    >
      <form onSubmit={handleOnSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
