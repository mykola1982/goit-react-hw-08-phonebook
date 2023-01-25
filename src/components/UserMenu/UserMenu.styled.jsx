import styled from '@emotion/styled';
import { IoIosLogOut } from 'react-icons/io';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 16px;
  background-color: orange;
  border-radius: 4px;
  border: none;
  color: black;
  font-weight: 500;
  font-size: 16px;

  text-align: center;

  transition: background-color 250ms linear, color 250ms linear;
  :hover,
  :focus {
    background-color: #fff;
    color: orange;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.16;
  font-weight: 500;
`;

export const Wrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(IoIosLogOut)`
  margin-left: 4px;
  width: 16px;
  height: 16px;
`;
