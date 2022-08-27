import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 50px;
  text-align: center;
`;

export const HomeTitle = styled.h1`
font-size: ${({ theme }) => theme.fontSizes.l1};
`;

export const HomeSubTitle = styled.h2`
font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const HomeText = styled.p`
font-size: ${({ theme }) => theme.fontSizes.ml};
color: ${({ theme }) => theme.colors.secondary};
`;

export const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;