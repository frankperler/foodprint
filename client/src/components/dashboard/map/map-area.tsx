import styled from 'styled-components';

export const MapArea = styled("div")`
  grid-area: map;
  justify-items: stretch;
  margin-right: 3rem;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 7px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.01);
  }
`