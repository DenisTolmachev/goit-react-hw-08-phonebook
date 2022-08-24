import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 50px;
  margin: 0 auto;
  margin-top: 50px;
  width: 40%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 5px 10px -4px #050505;
`;
