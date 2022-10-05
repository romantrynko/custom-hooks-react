import FormWrapper from '../FormWrapper';

export default function AddressForm() {
  return (
    <FormWrapper title='Address'>
      <div className='form-container'>
        <label>Street</label>
        <input type="text" autoFocus required />
        <label>City</label>
        <input type="text" required />
        <label>State</label>
        <input type="text" required />
        <label>Zip</label>
        <input type="text" required />
      </div>
    </FormWrapper>
  )
}