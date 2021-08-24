import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 1px solid #FF686B;
  width: 28rem;
  font-size: 16px;
  display: block;
  padding: 0.8rem 0.8rem;
`

export const SearchButton = styled.button`
  width: 14rem;
  background-color: #FF686B;
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-left: 1.6rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 56px;
  margin-bottom: 2rem;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`

export const MatchListContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`

export const PartnerListWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 3rem auto;
`

export const AddRequestButton = styled.button`
  display: block;
  padding: 0.8em;
  width: 28rem;
  height: auto;
  font-size: 18px;
  border: 1px solid #FF686B;
  color: white;
  background-color: #FF686B;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 14em;
`

export const InviteButton = styled.button`
 display: block;
  padding: 0.8em;
  width: 20rem;
  height: auto;
  font-size: 18px;
  border: 1px solid #FF686B;
  color: white;
  background-color: #FF686B;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 14em;
`

export const ContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const AddCardContainer = styled("div")`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  margin: 2rem;
  justify-content: space-between;
  overflow: hidden;
  /* box-shadow: 0.05rem 0.05rem lightgray; */
  background-color: white;
  border-radius: 7px;

  .img {
    opacity: 0.6;
    height: 8rem;
    width: 15rem;
  }

  .name {
    font-size: large;
    padding: 0.1rem;
    color: #FF686B;
    font-weight: bold;
    cursor: pointer;
    z-index: 5;
  }

  .foodtype {
    font-size: medium;
    padding: 0.1rem;
    font-weight: bold;
    color: #FFA69E;
    cursor: pointer;
    z-index: 5;
  }

  .addBtn {
    width: 15rem;
  }
`