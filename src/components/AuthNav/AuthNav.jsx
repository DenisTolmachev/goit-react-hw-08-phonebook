import { AuthLinkStyle } from './AuthNav.style';

export const AuthNav = () => {
  return (
    <div>
      <AuthLinkStyle to="/login">LogIn</AuthLinkStyle>
      <AuthLinkStyle to="/register">SignUp</AuthLinkStyle>
    </div>
  );
};
