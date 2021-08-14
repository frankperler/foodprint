import styled from 'styled-components';

export const Navbutton = styled.button`
  width: 6rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 4px;
  border: solid 0.1rem #FFA69E;
  background-color: white;
  color: #394141;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    transform: rotate(-2deg);
    opacity: 0.9;
    background-color: #FFA69E;
    border: solid 0.08rem #394141;
    box-shadow: 0.03rem 0.03rem #394141;
  }
`


