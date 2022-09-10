import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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