import { Link } from 'react-router-dom'
import { Title } from "../navbar/navbar-styled-components/title"
import { NavcontainerRegistration } from "./registration-styled-components/NavcontainerRegistration"

export const RegistrationNavbar = (): JSX.Element => {

  return (
    <NavcontainerRegistration>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Title style={{ marginLeft: "14.1rem", fontSize: "32px" }}><strong>food</strong>print.</Title>
      </Link>
    </NavcontainerRegistration>
  )
}