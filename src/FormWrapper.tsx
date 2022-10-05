import { ReactNode } from 'react'

type FormWrapperProps = {
  title: string,
  children: ReactNode
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '1rem' }}>{title}</h2>
      <div>{children}</div>
    </>
  )
}

export default FormWrapper