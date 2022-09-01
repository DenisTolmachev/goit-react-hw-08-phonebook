import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { Container } from './LoginPage.style';

const LogIn = () => {
  return (
    <Container>
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default LogIn;
