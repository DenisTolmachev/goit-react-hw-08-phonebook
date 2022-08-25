import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  //padding: 10px 20px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogoIcon = styled.img`
  height: 128px;
  width: 128px;
`;

export const HeaderNav = styled.nav``;
