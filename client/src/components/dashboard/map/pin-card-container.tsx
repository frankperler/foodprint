import styled from 'styled-components';

export const PinCardContainer = styled("div")`
  width: 8rem;
  height: 5rem;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-evenly;
  overflow: hidden;
  /* box-shadow: 0.05rem 0.05rem lightgray; */
  background-color: white;
  border-radius: 7px;

  .name {
    font-size: small;
    padding: 0.1rem;
    color: #FF686B;
    font-weight: bold;
    cursor: pointer;
  }

  .foodtype {
    font-size: small;
    padding: 0.1rem;
    font-weight: bold;
    color: #FFA69E;
    cursor: pointer;
  }
`