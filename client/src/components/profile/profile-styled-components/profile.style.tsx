import styled from "styled-components";

export const RestoCover = styled.img`
  grid-area: photo;
  object-fit: cover;
  border-radius: 30px;
  display: block;
  padding: 1rem;
  width: 90%;
  height: 90%;
`
export const ProfileDetails = styled.section`
  grid-area: suppliers;
  height: 75vh;
  width: 90%;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
  display: none;
  }  
`

export const ProfileGridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 25% 75%;
  grid-template-areas:
    "photo list"
    "details suppliers"
  ;
  height: 100vh;
  width: 75%;
  background-color: white;
  margin: 4rem auto;
`
export const InfoArea = styled("div") <{ gridArea?: string }>`
  grid-area: details;
  padding: 1rem;
`

export const ProfileName = styled("h2") <{ fontColor?: string }>`
  color: ${(props) => props.fontColor};
  font-size: 1.8rem;
  text-decoration:none;
`

export const Website = styled.a`
  color:darkgray;
  font-weight:bold;
  font-size: 1rem;
  text-decoration:none;
`

export const Day = styled.span`
  font-size: 0.8rem;
  font-style: italic;
`

export const DescriptionCard = styled.div`
  margin: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 90%;
  height: 90%;
  border-radius: 30px;
`
export const EditDescription = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding: 1rem;
`

export const DescriptionText = styled.div`
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 1.8;
  width: 90%;
`

export const ProfileHeader = styled.h1`
  font-size: 1.5rem;
  width: 80%;
  margin-left: 2rem;
`

export const SupplierContainer = styled.div`
  margin: 2rem auto;
  border-radius: 7px;
  padding: 1.2rem;
  box-shadow:  0px 0px 20px rgba(149, 157, 165, 0.2);
  width: 100%;
  height: 100vh;
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
    width: 90%;
    height: 10rem;
    outline: none;
    line-height: 1.6;
    overflow: hidden;
    resize: none;

  `

export const UpdateChangesButton = styled.button`
    width: 10rem;
    padding: 0.2rem 0.5rem;
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
    border: 1px solid #84DCC6;
    color: #84DCC6;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
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
  margin-right: 2rem;
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

export const SupplierImg = styled.img`
  object-fit: cover;
  border-radius: 10px;
  height: 12rem;
  width: 30%;
`

export const SupplierCardGrid = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1.2rem;
  margin: 0.6rem;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const AddSupplier = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 10em;
  align-items: center;
  cursor: pointer;
`

export const SupplierInfoInterior = styled.div`
  margin-left: 1.5rem;
  width: 70%;
  text-decoration:none;
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