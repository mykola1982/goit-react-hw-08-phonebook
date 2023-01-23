import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 2px solid black;
  > nav,
  div {
    display: flex;
    gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  transition: color 250ms linear, background-color 250ms linear;
  &.active {
    background-color: orange;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
