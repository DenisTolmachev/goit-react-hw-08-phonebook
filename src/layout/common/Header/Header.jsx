import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppLogo } from 'components/Logo/Logo';
import { HeaderStyle } from './Header.style';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLLoggedIn } from 'store/auth/authSelectors';
import { Link } from 'react-router-dom';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLLoggedIn);

  return (
    <HeaderStyle>
      <AppLogo />
      <Link to='/contacts' style={{color: 'white'}}>ContactsDemo</Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyle>
  );
};
