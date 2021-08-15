import styled from 'styled-components';

export const FilterArea = styled("div") <{ gridArea?: string }>`
  grid-area: filters;
  height: 20rem;
  width: 15rem;
  overflow: hidden;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.01);
  }
`