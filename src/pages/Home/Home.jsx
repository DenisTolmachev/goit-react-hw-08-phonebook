import { Button } from 'components/common/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/auth/authOperations';
import { getIsLLoggedIn } from 'store/auth/authSelectors';
import {
  Container,
  HomeSubTitle,
  HomeText,
  HomeTitle,
  HomeLink,
} from './Home.style';

const StartPage = () => {
  const isLoggedIn = useSelector(getIsLLoggedIn);
  const dispatch = useDispatch();

  return (
    <Container>
      <HomeTitle>Hello, user!</HomeTitle>
      <HomeSubTitle>You are in the Phonebook app</HomeSubTitle>
      {isLoggedIn ? (
        <div>
          <HomeText>
            If you want to leave your account, click here -{' '}
            <Button onClick={() => dispatch(logoutUser())}>LogOut</Button>
          </HomeText>
        </div>
      ) : (
        <div>
          <HomeText>
            To sign in to your account, click here -{' '}
            <HomeLink to="/login">LogIn</HomeLink>
          </HomeText>
          <HomeText>
            If you don't have an account, click here -{' '}
            <HomeLink to="/register">SignUp</HomeLink>
          </HomeText>
        </div>
      )}
    </Container>
  );
};

export default StartPage;
