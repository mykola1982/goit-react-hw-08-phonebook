import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { IoIosLogIn } from 'react-icons/io';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 18px;

  text-align: center;
  transition: color 250ms linear, background-color 250ms linear;
  &.active {
    background-color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

export const Icon = styled(IoIosLogIn)`
  margin-left: 4px;
  width: 16px;
  height: 16px;
`;
