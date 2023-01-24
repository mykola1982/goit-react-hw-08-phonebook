import styled from '@emotion/styled';

import { IoMdPersonAdd } from 'react-icons/io';

export const Button = styled.button`
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 8px 16px;
  border-radius: 50%;

  width: 100px;
  height: 100px;
  padding: 8px;
  background-color: orange;

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

export const Icon = styled(IoMdPersonAdd)`
  width: 30px;
  height: 30px;
`;
