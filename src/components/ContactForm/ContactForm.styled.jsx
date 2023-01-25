import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.16;
`;

export const Input = styled(Field)`
  font-size: 18px;
  line-height: 1.16;
  width: 300px;
  height: 26px;
  border: 2px solid #212121;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  transition: border-color 250ms linear;

  :hover,
  :focus {
    border-color: orange;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.16;
  color: red;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  padding: 8px;
  background-color: orange;
  border-radius: 4px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    color: orange;
  }
`;
