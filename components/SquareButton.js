import styled from "styled-components";

const Square = styled.div`
  border: 1px solid #333;
  width: 200px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(190, 190, 190, 0.2);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`

export default function SquareButton({ children, onClick }) {
  return (
    <Square onClick={onClick}>{children}</Square>
  )
}