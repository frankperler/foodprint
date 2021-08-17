import styled from 'styled-components';

export const CardContainer = styled("div") <{
  backgroundImg?: string,
}>`
  width: 14rem;
  height: 17rem;
  margin: 3rem 1rem;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0.05rem 0.05rem lightgray;
  background-color: white;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  .name {
    font-size: large;
    padding: 0.25rem;
    color: #FF686B;
    font-weight: bold;
  }

  .foodtype {
    padding: 0.25rem;
    font-weight: bold;
    color: #FFA69E;
  }
`