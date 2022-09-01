import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import { Container } from './RegisterPage.style';

const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
};

export default Register;
