import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 10px;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: 10px;
`;

export const LogoIcon = styled.img`
  height: 30px;
  width: 30px;
`;

export const HeaderNav = styled.nav``;

export const LinkStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: 5px;
  border-radius: 5px;
  &.active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white};
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
