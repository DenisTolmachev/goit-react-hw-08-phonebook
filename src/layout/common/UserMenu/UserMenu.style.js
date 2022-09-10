import styled from 'styled-components';


export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-right: 10px;
`;

export const UserAvatar = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
