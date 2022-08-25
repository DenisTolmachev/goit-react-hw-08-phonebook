import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 5px 10px -4px #050505;
`;