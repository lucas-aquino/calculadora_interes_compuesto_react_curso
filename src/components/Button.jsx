import { styled } from "styled-components";


const Button = styled.button`
  background-color: #6366f1;
  color: #cbd5e1;
  border: 2px solid #6366f1;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  border-radius: 10px;
  padding: 15px 14px;
  width: 100%;
  margin: 15px 0px;
  transition: transform 0.2s;
  
  &:hover {
    background-color: #818cf8;
    cursor: pointer;
  }

  &:active {
    transform: scale(1.02);
  }
`

export default Button


