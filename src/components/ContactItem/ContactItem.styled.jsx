import styled from '@emotion/styled';
import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  background-color: rgba(192, 192, 192, 0.5);
  border-radius: 8px;
  font-size: 20px;
  line-height: 1.16;

  > ul {
    display: flex;
    gap: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  background-color: orange;
  border-radius: 50%;
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

export const IconDel = styled(MdDeleteForever)`
  width: 24px;
  height: 24px;
`;

export const IconEdit = styled(MdModeEditOutline)`
  width: 24px;
  height: 24px;
`;
