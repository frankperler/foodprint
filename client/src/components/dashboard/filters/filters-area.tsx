import styled from 'styled-components';

export const FilterArea = styled("div") <{ gridArea?: string }>`
  grid-area: filters;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 30rem;
  width: 20rem;
  background-color: white;
  border-radius: 7px;
`