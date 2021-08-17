import styled from 'styled-components';

export const ResultsCardStyles = styled("div") <{
  backgroundImg?: string,
}>`
  width: 10rem;
  height: 10rem;
  margin: 3rem 1rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0.05rem 0.05rem lightgray;
  background-color: white;
  background: ${props => `url(${props.backgroundImg}) no-repeat center`};
  background-size: cover;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  .name {
    font-size: large;
    padding: 0.2rem;
    color: #FF686B;
    font-weight: bold;
  }

  .foodtype {
    padding: 0.1rem;
    font-weight: bold;
    color: white;
  }

  .eco-score {
    padding: 0.1rem;
    font-weight: bold;
    color: white;
  }

  .price {
    padding: 0.1rem;
    font-weight: bold;
    color: white;
  }


`