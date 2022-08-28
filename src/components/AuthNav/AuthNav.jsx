import { AuthNavStyle, AuthLinkStyle } from './AuthNav.style';

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <AuthLinkStyle to="/login">LogIn</AuthLinkStyle>
      <AuthLinkStyle to="/register">SignUp</AuthLinkStyle>
    </AuthNavStyle>
  );
};
