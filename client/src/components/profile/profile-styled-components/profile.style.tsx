import styled from "styled-components";

export const UserName = styled.h3`
  font-size: 24px;
  display: inline-block;
`

export const Photo = styled.div`
  display: block;
  border: 1px solid black;
  width: 16rem;
  height: 16rem;
  grid-area: photo;
`

export const ProfileDetails = styled.section`
  grid-area: list;
  /* border: 1px solid black; */
`

export const DescriptionCard = styled.div`
  margin: 2rem auto;
  border: 1px solid black;
  width: 75%;
  height: 4rem;
`

export const GridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
    "photo list list"
    "filters list list"
    "filters list list"
  ;
  height: 100vh;
  width: 65vw;
  background-color: whitesmoke;
  margin: auto;
`

export const InfoArea = styled("div") <{ gridArea?: string }>`
  grid-area: filters;
  height: 25rem;
  width: 20rem;
  overflow: hidden;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;
`

export const InteriorArea = styled.div`
  padding: 4rem;
`

export const SupplierContainer = styled.div`
  margin: 2rem auto;
  border: 1px solid black;
  width: 75%;
  height: auto;
`

export const AddPartnerButton = styled.button`
  display: block;
  padding: 0.8em;
  width: 14rem;
  height: auto;
  font-size: 18px;
  border: 1px solid #84DCC6;
  color: black;
  background-color: white;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 1em;
`

export const Avatar = styled.div`
  border-radius: 100px;
  width: 48px;
  height: 48px;
  border: 1px solid black;
  display: inline-block;
  vertical-align: middle;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const EditProfileButton = styled.button`
  display: block;
  padding: 0.8em;
  width: 14rem;
  height: auto;
  font-size: 18px;
  border: 1px solid #84DCC6;
  color: black;
  background-color: white;
  cursor: pointer;
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 2em;
  margin-right: 2em;
`
export const InfoHeader = styled.h4`

`

export const ProfileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`

export const EcoLeafContainer = styled.div`
  width: auto;
`

export const EcoLeaf = styled.img`
  display: inline-block;
`

export const RestoImg = styled.img`
  display: block;
  width: 12rem;
  height: auto;
  margin-bottom: 0.4rem;
  margin-top: 1.2rem;
`

export const RestoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  width: 95%;
`

export const TechnologyContainer = styled.div`
  margin: 2rem auto;
  border: 1px solid black;
  width: 75%;
  height: 8rem;
`

export const ProductsContainer = styled.div`
  margin: 2rem auto;
  border: 1px solid black;
  width: 75%;
  height: 8rem;
`