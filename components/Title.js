import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
  text-align: center;
  margin-bottom: 4rem;
`;

export default function Title({ className, children }) {
  return (
    <StyledTitle className={className}>{children}</StyledTitle>
  )
}
