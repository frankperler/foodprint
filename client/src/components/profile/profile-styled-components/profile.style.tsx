import styled from "styled-components";

export const Photo = styled.div`

  display: block;
  width: 28rem;
  height: 23rem;
  border-radius: 7px;
`

export const RestoCover = styled.img`
  grid-area: photo;
  object-fit: cover;
  border-radius: 7px;
  display: block;
  padding: 1rem;
  width: 90%;
  height: 90%;
`
export const ProfileDetails = styled.section`
  grid-area: suppliers;
  /* border: 1px solid black; */
`

export const DescriptionCard = styled.div`
  margin: 0 auto 2rem auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 75%;
  height: auto;
  padding: 2rem;
`

export const DescriptionText = styled.div`
  margin: 2rem auto;
  font-size: 16px;
  line-height: 1.6;
  width: 80%;
`

export const ProfileGridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 25% 75%;
  grid-template-areas:
    "photo list"
    "details suppliers"
  ;
  height: auto;
  width: 75%;
  background-color: white;
  margin: 4rem auto 0 auto;
`

export const InfoArea = styled("div") <{ gridArea?: string }>`
  grid-area: details;
  height: auto;
  width: 28rem;
  overflow: hidden;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;
  `

export const AddHeader = styled.h4`
    display: inline-block;
  `

export const CheckBoxForm = styled.form`
  width: 32rem;

  `
export const VehicleTypeForm = styled.div`
    margin-top: 1.8em;
  `

export const EnergyTypeForm = styled.div`
    margin-top: 1em;
  `

export const InnerForm = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  `

export const EditTextArea = styled.textarea`
    padding: 0.8rem;
    width: 100%;
    height: 21em;
    outline: none;
    line-height: 1.6;
    overflow: hidden;
    resize: none;

  `

export const UpdateChangesButton = styled.button`
    margin-top: 1.6em;
    width: 12em;
    padding: 0.8em 2em;
    background-color: #84DCC6;
    border: 2.5px solid #84DCC6;
    color: white;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
`

export const CancelButton = styled.button`
    margin-top: 1em;
    width: 8em;
    padding: 0.4em 2em;
    background-color: whitesmoke;
    border: 2.5px solid #84DCC6;
    color: #84DCC6;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`

export const InteriorArea = styled.div`
  padding: 0 4rem 4rem 4rem;
`

export const SupplierContainer = styled.div`
  margin: 2rem auto;
  padding: 1.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 75%;
  height: auto;
`

export const InteriorSupplierContainer = styled.div`
  padding: 1.2rem;
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

export const SupplierContainerImg = styled.div`
  height: 12rem;
`

export const SupplierImg = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const SupplierCardGrid = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  margin: 0.6rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const SupplierInfo = styled.div`

`

export const AddSupplier = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10em;
  align-items: center;
  cursor: pointer;
`

export const EditDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

export const SupplierInfoInterior = styled.div`
  padding: 1.2rem;
`

export const SupplierListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  margin: 4rem auto;
`

export const RestoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  width: 80%;
`

export const TechnologyRibbons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2em auto;
`

export const TechnologyContainer = styled.div`
  margin: 2rem auto;
  padding: 1.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 75%;
  height: auto;
`

export const ProfileHeader = styled.h1`
  display: flex;
  justify-content: flex-start;
  padding-left: 2.6em;
  font-size: 32px;
`

export const EnergySourceGrid = styled.div`
  display: flex;
  flex-direction: column;
`

export const TechChoiceGrid = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`

export const ProductsContainer = styled.div`
  margin: 2rem auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 75%;
  height: 8rem;
`