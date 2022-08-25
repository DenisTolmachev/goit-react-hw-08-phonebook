import { HeaderStyle, Logo, LogoText, LogoIcon, HeaderNav, LinkStyle } from './Header.style';
import logoIcon from 'img/logoIcon.png'

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo to="/">
        <LogoText>Phonebook</LogoText>
        <LogoIcon src={logoIcon} alt="Phonebook-icon" />
      </Logo>
      <HeaderNav>
        <LinkStyle to="/login">LogIn</LinkStyle>
        <LinkStyle to="/register">Register</LinkStyle>
      </HeaderNav>
    </HeaderStyle>
  );
};
