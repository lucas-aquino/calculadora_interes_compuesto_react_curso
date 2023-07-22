import { styled } from "styled-components"
import Titulo from "./Titulo"

const Contenedor = styled.div`
  margin: 20px 0px;
  background-color: #334155;
  border-radius: 10px;
  padding: 10px 0px;
  user-select: none;
`

const Label = styled(Titulo)`
  text-align: center;
  margin-bottom: 0px;
  font-size: 2.6rem;
  margin-top: 0px;
  color: #e2e8f0;
`

const NumberBalance = styled.div`
  font-size: 5rem;
  display: block;
  font-family: 'Unica One', cursive;
  text-align: center;
  color: #4ade80;
`


const BalanceTotal = ({ balance }) => {
  return (
    <Contenedor>
      <Label>Balance</Label>
      <NumberBalance>{balance}</NumberBalance>
    </Contenedor>
  )
}


export default BalanceTotal

