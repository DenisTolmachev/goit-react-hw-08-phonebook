import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppLogo } from 'components/Logo/Logo';
import { HeaderStyle } from './Header.style';

export const Header = () => {
  return (
    <HeaderStyle>
      <AppLogo />
      <AuthNav />
    </HeaderStyle>
  );
};
