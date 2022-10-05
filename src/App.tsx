import { useMultistepForm } from './hooks/useMultiStepForm';
import UserForm from './stepComponents/UserForm';
import AddressForm from './stepComponents/AddressForm';
import AccountForm from './stepComponents/AccountForm';
import { FormEvent, useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [data,setData] = useState(initialState)
  const { steps, currentStepIndex, step, isFirstStep, prev, next, isLastStep } = useMultistepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />
  ])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    next()
  }

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem'
        }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '.5rem',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            position: 'absolute',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'end',
            bottom: '1rem'
          }}>
            {!isFirstStep && <button type='button' onClick={prev}>Previous</button>}
            <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App;
