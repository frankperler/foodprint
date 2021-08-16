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

// export const FilterArea = styled("div")`
//   grid-area: filters;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   height: 30rem;
//   margin-right: 3rem;
//   justify-items: stretch;
//   /* width: 18.75rem; */
//   background-color: white;
//   border-radius: 7px;
// `