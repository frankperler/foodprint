import styled from 'styled-components';

export const CardContainer = styled("div")`
  width: 15rem;
  height: 15rem;
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-evenly;
  overflow: hidden;
  box-shadow: 0.05rem 0.05rem lightgray;
  background-color: white;
  border-radius: 7px;


  &:hover {
    transform: scale(1.02);
  }

  .name {
    font-size: 20px;
    padding: 0.25rem;
    color: #FF686B;
    font-weight: bold;
    cursor: pointer;
  }

  .foodtype {
    font-weight: bold;
    color: #FFA69E;
    cursor: pointer;
    flex-grow: 0;
  }

  .bottom-card-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    font-weight: 600;
    color: #bfbfbf;
    margin-bottom: 0.3rem;
  }

  .distance {
    flex-grow: 0;
    margin-right: 0.25rem;
  }
`