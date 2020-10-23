import { useEffect } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  max-width: 500px;
  width: 80%;
  margin: 0 auto;
  background-color: none;
`

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border: 1px solid rgba(190, 190, 190, 0.2);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const SearchIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 32px;
  right: 10px;
`

const InputLabel = styled.span`
  font-size: .8rem;
  color: gray;
  margin-bottom: 5px;
`

export default function Input({ label, onChange }) {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput onChange={onChange} type="text" placeholder="ex: 374" />
      <SearchIcon src="/search.svg" />
    </InputWrapper>
  )
}