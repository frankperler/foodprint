import styled from 'styled-components';

export const TopCardStyles = styled("div") <{
  backgroundImg?: string,
}>`
  width: 90%;
  height: 12rem;
  overflow: hidden;
  background: ${props => `url(${props.backgroundImg}) no-repeat center`};
  background-size: cover;
  border-radius: 7px;
`