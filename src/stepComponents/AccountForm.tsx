import FormWrapper from '../FormWrapper';

type AccountData = {
  email: string,
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export default function AccountForm({
  email,
  password,
  updateFields
}: AccountFormProps) {
  return (
    <FormWrapper title='Account'>
      <div className='form-container'>
        <label>Email</label>
        <input
          autoFocus
          type="email"
          required
          value={email}
          onChange={e => updateFields({ email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={e => updateFields({ password: e.target.value })}
        />
      </div>
    </FormWrapper>
  )
}