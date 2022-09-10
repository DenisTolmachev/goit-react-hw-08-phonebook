import { AuthNav } from 'layout/common/AuthNav/AuthNav';
import { AppLogo } from 'components/common/Logo/Logo';
import { HeaderStyle, HeaderLinkStyle } from './Header.style';
import { UserMenu } from 'layout/common/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLLoggedIn } from 'store/auth/authSelectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLLoggedIn);

  return (
    <HeaderStyle>
      <AppLogo />
      {isLoggedIn ? (
        <HeaderLinkStyle to="/contacts">
          Contacts
        </HeaderLinkStyle>
      ) : (
        <></>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyle>
  );
};
