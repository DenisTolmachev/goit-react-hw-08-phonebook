import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppLogo } from 'components/Logo/Logo';
import { HeaderStyle } from './Header.style';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLLoggedIn } from 'store/auth/authSelectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLLoggedIn);

  return (
    <HeaderStyle>
      <AppLogo />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyle>
  );
};
