import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 12px 54px;
  font-size: 1.2rem;
`;

export default function Button({ children }) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
