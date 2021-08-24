import { ContainerWrapper } from './add-partner-styled-components/add-functionality-styles';
import { Header } from './add-partner-styled-components/add-functionality-styles';
import { Link } from 'react-router-dom';
import { InviteButton } from './add-partner-styled-components/add-functionality-styles';

export const ThankYouPage = (): JSX.Element => {

  return (
    <ContainerWrapper>
      <Header>Thank you for adding your partner!</Header>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <InviteButton>Back to Homepage!</InviteButton>
      </Link>
    </ContainerWrapper>
  )
}