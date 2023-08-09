import { styled } from "styled-components"
import Titulo from "./Titulo"

const Contenedor = styled.div`
  margin: 20px 0px;
  background-color: #334155;
  border-radius: 10px;
  padding: 10px 0px;
`
  
const Label = styled(Titulo)`
  text-align: center;
  margin-bottom: 0px;
  font-size: 2.6rem;
  margin-top: 0px;
  color: #e2e8f0;
  user-select: none;
`

const NumberBalance = styled.div`
  font-size: 5rem;
  display: block;
  font-family: 'Unica One', cursive;
  text-align: center;
  color: #4ade80;

  &::selection {
    background-color: #4ade80;
    color: #e2e8f0;
    border-radius: 10px;
  }
`


const BalanceTotal = ({ valor }) => {
  return (
    <Contenedor>
      <Label>Balance</Label>
      <NumberBalance>{ valor }</NumberBalance>
    </Contenedor>
  )
}


export default BalanceTotal

