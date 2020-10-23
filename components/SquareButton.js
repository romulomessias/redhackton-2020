import styled from "styled-components";

const Square = styled.div`
  border: 1px solid #333;
  max-width: 200px;
  padding: 20px;
`

export default function SquareButton({ children }) {
  return (
    <Square>{children}</Square>
  )
}