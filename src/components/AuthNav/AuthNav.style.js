import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AuthLinkStyle = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: end;
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

export const AuthLinkTextStyle = styled.span`
  margin-right: 5px;
`;
