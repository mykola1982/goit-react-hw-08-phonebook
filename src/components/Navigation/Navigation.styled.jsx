import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.16;
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
