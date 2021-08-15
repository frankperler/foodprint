import styled from 'styled-components';

export const MapArea = styled("div") <{ gridArea?: string }>`
  grid-area: map;
  height: 15rem;
  width: 15rem;
  overflow: hidden;
  border-radius: 7px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.01);
  }
`