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
    padding: 0.25rem;
    font-weight: bold;
    color: #FFA69E;
    cursor: pointer;
  }
`