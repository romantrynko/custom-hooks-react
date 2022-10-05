import { useMultistepForm } from './hooks/useMultiStepForm';
import UserForm from './stepComponents/UserForm';
import AddressForm from './stepComponents/AddressForm';
import AccountForm from './stepComponents/AccountForm';
import { FormEvent, useState } from 'react';

type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const initialData: FormData = {
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
  const [data, setData] = useState(initialData)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    prev,
    next
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('Account created successfully')
  }

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem'
        }}>
          {currentStepIndex + 1}{' '} /{' '}{steps.length}
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
