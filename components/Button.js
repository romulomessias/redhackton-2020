import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 12px 54px;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default function Button({ onClick, className, children }) {
  return (
    <StyledButton onClick={onClick} className={className}>{children}</StyledButton>
  )
}
