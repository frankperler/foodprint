import styled from 'styled-components';

export const ListWrapper = styled("div") <{ flexDir?: string }>`
  display: flex;
  flex-direction: ${props => props.flexDir};
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  width:100%;
  background-color: white;
`