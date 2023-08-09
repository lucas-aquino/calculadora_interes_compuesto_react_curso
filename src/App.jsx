import { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import Container from "./components/Container"
import Section from "./components/Section"
import Input from "./components/Input"
import Button from "./components/Button"
import Titulo from "./components/Titulo"
import BalanceTotal from "./components/BalanceTotal"


const compoundInterest = ( deposit, contribution, years, rate ) => {
  let total = deposit

  for( let i = 0; i < years; i++ ){
    total = ( total + contribution ) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function App() {

  const [ balance, setBalance ] = useState('')

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest( Number(deposit), Number(contribution), Number(years), Number(rate) )
    setBalance(formatter.format(val))
  }

  return (
    <Container>
      <Section>
        <Titulo>Calculadora Interes Compuesto</Titulo>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}

          onSubmit={handleSubmit}

          validationSchema={Yup.object({
            deposit: Yup
            .number()
            .required('Es necesario un deposito inicial')
            .typeError('Tiene que ser un numero'),
            
            contribution: Yup
            .number()
            .required('Es necesario una contribucion anual')
            .typeError('Tiene que ser un numero'),
            
            years: Yup
            .number()
            .required('Es necesario indicar la cantidad de años')
            .typeError('Tiene que ser un numero'),
            
            rate: Yup
            .number()
            .required('Es necesario un interes')
            .typeError('Tiene que ser un numero')
            .min(0, 'El valor minimo es 0')
            .max(1, 'El valor maximo es 1'),
          })}
        >
          <Form>
            <Input name='deposit' label='Deposito Inicial'/>
            <Input name='contribution' label='Contribucion anual'/>
            <Input name='years' label='Años'/>
            <Input name='rate' label='Interes estimado'/>
            <Button type='submit'>Calcular</Button>
          </Form> 
        </Formik>
        
        { balance !== '' && 
          <BalanceTotal valor={balance}></BalanceTotal>
        }

      </Section>
    </Container>
  )
}

export default App
