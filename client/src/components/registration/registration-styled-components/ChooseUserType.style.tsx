import styled, { css } from 'styled-components';

interface IProps {
  isActive?: boolean;
}

export const TypeButton = styled.button<IProps>`
  background-color: white;
  border: 2px solid #84DCC6;
  width: 12rem;
  height: 3rem;
  font-size: 18px;
  &:hover {
    background-color: #84DCC6;
    opacity: 0.75;
    cursor: pointer;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #84DCC6;
    `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Header1 = styled.h1`
  font-size: 2.8rem;
  display: flex;
  justify-content: flex-start;
`