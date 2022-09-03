import { AuthNavStyle, AuthLinkStyle, AuthLinkTextStyle } from './AuthNav.style';
import { FiLogIn, FiUserPlus } from 'react-icons/fi'

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <AuthLinkStyle to="/login"><AuthLinkTextStyle>LogIn</AuthLinkTextStyle><FiLogIn size={20}/></AuthLinkStyle>
      <AuthLinkStyle to="/register"><AuthLinkTextStyle>SignUp</AuthLinkTextStyle><FiUserPlus size={20}/></AuthLinkStyle>
    </AuthNavStyle>
  );
};
