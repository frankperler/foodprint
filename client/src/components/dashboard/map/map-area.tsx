import styled from 'styled-components';

export const MapArea = styled("div")`
  grid-area: map;
  justify-items: stretch;
  height: 25rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 7px;
  box-sizing: border-box;
  position:sticky;
  top: 13%;

  &:hover {
    transform: scale(1.01);
  }
`