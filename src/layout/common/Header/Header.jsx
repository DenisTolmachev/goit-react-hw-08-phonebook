import { AppLogo } from 'components/Logo/Logo';
import { HeaderStyle, HeaderNav, LinkStyle } from './Header.style';

export const Header = () => {
  return (
    <HeaderStyle>
      <AppLogo />
      <HeaderNav>
        <LinkStyle to="/login">LogIn</LinkStyle>
        <LinkStyle to="/register">SignUp</LinkStyle>
      </HeaderNav>
    </HeaderStyle>
  );
};
