import { NavLink } from 'react-router-dom';
import { HeaderStyle, Logo, LogoIcon } from './Header.style';

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo>
        <p>Phonebook</p>
        <LogoIcon src="img/phonebook-icon1.png" alt="Phonebook-icon" />
      </Logo>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </HeaderStyle>
  );
};
