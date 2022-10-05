import React, { useState } from 'react'
import useInput from './hooks/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = e => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);

    resetFirstName();
    resetLastName();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label for="last">First Name</label>
          <input type="text" name="first" {...bindFirstName} />
        </div>
        <div>
          <label for="last">Last Name</label>
          <input type="text" name="last"  {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>
          {firstName && lastName && `Hello ${firstName} ${lastName}`}
        </h1>
      </div>
    </div>
  )
}

export default UserForm