import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 10px;
`;