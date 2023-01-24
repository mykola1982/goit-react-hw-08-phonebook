import { StyledLink, Icon } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">
        <span>Log In</span>
        <Icon />
      </StyledLink>
    </div>
  );
};
