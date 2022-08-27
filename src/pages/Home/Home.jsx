import {
  Container,
  HomeSubTitle,
  HomeText,
  HomeTitle,
  HomeLink,
} from './Home.style';

const StartPage = () => {
  return (
    <Container>
      <HomeTitle>Hello, user!</HomeTitle>
      <HomeSubTitle>You are in the Phonebook app</HomeSubTitle>
      <HomeText>
        To sign in to your account, click here -{' '}
        <HomeLink to="/login">LogIn</HomeLink>
      </HomeText>
      <HomeText>
        If you don't have an account, click here -{' '}
        <HomeLink to="/register">SignUp</HomeLink>
      </HomeText>
    </Container>
  );
};

export default StartPage;
