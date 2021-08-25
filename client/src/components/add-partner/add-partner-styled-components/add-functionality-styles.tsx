import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 2px solid #FF686B;
  border-radius: 4px;
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
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1.6rem;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem auto;
  background-color: white;
  width: 85%;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
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
  border: 1px solid #84DCC6;
  border-radius: 4px;
  color: white;
  background-color: #84DCC6;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 14em;
`

export const ReturnHomeButton = styled.button`
 display: block;
  padding: 0.8em;
  width: 20rem;
  height: auto;
  font-size: 18px;
  border: 1px solid #84DCC6;
  border-radius: 4px;
  color: white;
  background-color: #84DCC6;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 4em;
`

export const ContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ThankYouWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  transform: translateY(40%);
  height: auto;
  width: 75%;
  margin: 0 auto;
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
  background-color: white;
  border-radius: 7px;

  .img {
    opacity: 0.6;
    height: 8rem;
    width: 15rem;
  }
      
  .img:hover {
    opacity: 1;
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