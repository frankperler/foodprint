import styled from 'styled-components';

export const TopCardContainer = styled("div")`
  width: 80%;
  height: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0.05rem 0.05rem lightgray;
  background-color: white;
  border-radius: 7px;
  
  &:hover {
    transform: scale(1.01);
  }
  
  .name {
    font-size: large;
    padding: 0.25rem;
    color: #FF686B;
    font-weight: bold;
    cursor: pointer;
  }

  .foodtype {
    font-weight: bold;
    color: #FFA69E;
    cursor: pointer;
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