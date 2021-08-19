import styled from 'styled-components';

export const GridContainer = styled("div")`
  display: grid;
  grid-auto-rows: 1fr 1fr 1fr;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
    "map list top"
    "filters list top"
    "filters list top"
  ;
  height: 100vh;
  width: 75vw;
  background-color: whitesmoke;
  margin: auto;
`