import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
  height: 22px;
`;

export const Input = styled(Field)`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  border: 1px solid transparent;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  &.error {
    border-color: ${({ theme }) => theme.colors.error};
  }
`;

export const InputFeedback = styled.div`
  color: ${({ theme }) => theme.colors.error};
  margin-top: -15px;
  font-size: 14px;
  margin-bottom: 20px;
`;
