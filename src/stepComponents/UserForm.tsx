import FormWrapper from '../FormWrapper';
export default function UserForm() {
  return (
    <FormWrapper title='User details'>
      <div className='form-container'>
        <label>First Name</label>
        <input type="text" autoFocus required />
        <label>Last Name</label>
        <input type="text" required />
        <label>Age</label>
        <input type="number" required min={1} />
      </div>
    </FormWrapper>
  )
}