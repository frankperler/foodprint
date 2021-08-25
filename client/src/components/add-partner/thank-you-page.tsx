import { ContainerWrapper, ThankYouWrapper } from './add-partner-styled-components/add-functionality-styles';
import { Header } from './add-partner-styled-components/add-functionality-styles';
import { Link } from 'react-router-dom';
import { ReturnHomeButton } from './add-partner-styled-components/add-functionality-styles';

export const ThankYouPage = (): JSX.Element => {

  return (
    <ThankYouWrapper>
      <Header>Thank you for adding your partner!</Header>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <ReturnHomeButton>Return to home</ReturnHomeButton>
      </Link>
    </ThankYouWrapper>
  )
}