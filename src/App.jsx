import { Formik, Form } from "formik"
import Container from "./components/Container"
import Section from "./components/Section"
import Input from "./components/Input"
import Button from "./components/Button"

function App() {

  const handleSubmit = () => {

  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name='deposit' label='Deposito Inicial'/>
            <Input name='contribucion' label='Contribucion anual'/>
            <Input name='years' label='Años'/>
            <Input name='rate' label='Interes estimado'/>
            <Button>Calcular</Button>
          </Form>
        </Formik>

      </Section>
    </Container>
  )
}

export default App
