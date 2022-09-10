import { Outlet } from 'react-router-dom';
import { Container } from './common/Container.style';
import { Header } from './common/Header/Header';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
