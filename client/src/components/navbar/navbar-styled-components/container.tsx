import styled from 'styled-components';

export const Container = styled("div") <{
  inputColor?: string,
  containerHeight?: string,
  boxShadow?: string,
  navPosition?: string,
  topPosition?: string
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.inputColor || "white"};
  margin: auto;
  width: 100vw;
  height: ${(props) => props.containerHeight};
  box-shadow: ${(props) => props.boxShadow};
  position: ${(props) => props.navPosition};
  top: ${(props) => props.topPosition};
  z-index: 1;
`
