import styled from "styled-components";

export const RestoCover = styled.img`
  grid-area: photo;
  object-fit: cover;
  border-radius: 30px;
  display: block;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  width: 80%;
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
export const ProfileRestaurantGridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 35% 65%;
  grid-template-areas:
    "photo list"
    "details suppliers"
  ;
  height: 100vh;
  width: 75%;
  background-color: white;
  margin: 4rem auto;
`

export const ProfileSupplierGridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 35% 65%;
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

export const TextDetails = styled("h4") <{ fontColor?: string }>`
  font-size: 1.2rem;
  font-weight: normal;
  color: ${(props) => props.fontColor};
`

export const Table = styled("table")`
  color: #818181;
  width: 90%;
  margin-left: 4rem;
`

export const TableRow = styled("tr")`
  font-size: large;
`

export const TableHeader = styled.th <{ textAlign?: string }>`
  color: #FF686B;
  text-align: ${(props) => props.textAlign ? props.textAlign : "center"};
`

export const TableData = styled.td<{
  textColor?: string,
  textAlign?: string,
  fontWeight?: string,
}>` 
  color: ${(props) => props.textColor};
  text-align: ${(props) => props.textAlign ? props.textAlign : "center"};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "normal"};
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
  width: 90%;
  margin-top: 1rem;
  height: 80%;
  padding: 1rem;
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
  font-size: 2rem;
  color: darkgray;
  font-weight: bold;
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
export const TechnologyContainer = styled.div`
  margin: 2rem auto;
  border-radius: 7px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 12px;
  width: 100%;
  height: auto;
`

export const TechChoiceGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 9rem;
  width: 80%;
`

export const TechnologySourceGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: flex-start;
`

export const EnergySourceGrid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content:space-around;
`

export const VehicleTypeForm = styled.div`
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  `

export const EnergyTypeForm = styled.div`
    margin-top: 1rem;
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
    margin: 1rem 0rem;
    padding: 0.3rem;
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
  width: 15rem;
  height: 10rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  margin: 4rem auto;
`

export const TechnologyRibbons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2em auto;
`

export const ProductsContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
`

