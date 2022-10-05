import FormWrapper from '../FormWrapper';
export default function AccountForm() {
  return (
    <FormWrapper title='Account'>
      <div className='form-container'>
        <label>Email</label>
        <input type="email" autoFocus required />
        <label>Password</label>
        <input type="password" required />
      </div>
    </FormWrapper>
  )
}