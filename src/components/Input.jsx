import { styled } from "styled-components"
import { useField } from "formik"


const Control = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 2px;
`

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`


const TextField = styled.input.attrs({
  type: 'text'
})`
  outline: none;
  outline-color: #6366f1; 
  transition: outline 0.05s ease;
  padding: 15px 14px;
  border-radius: 10px;
  border: none;
  background-color: #334155;
  box-sizing: content-box;
  margin-bottom: 10px;

  color: #cbd5e1;

  

  &:focus {
    outline: 3px solid #6366f1;
  }
`

const ErrorMessage = styled.div`
  color: #e11d48;
  font-weight: bold;
`

const Input = ({ label, ...props}) => {

  const [field, meta] = useField(props)
  
  return (
    <Control>
      <Label>{label}</Label>
      <TextField { ...field } { ...props }></TextField>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null }
    </Control>
  )
}

export default Input