import styled from 'styled-components';

interface color {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: auto;
  width: 100vw;
  height: 4rem;
`