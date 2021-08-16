import styled from 'styled-components';

export const MapArea = styled("div") <{ gridArea?: string }>`
  grid-area: map;
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  border-radius: 7px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.01);
  }
`