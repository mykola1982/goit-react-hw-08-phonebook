import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectRefreshing,
  selectAuthIsLoading,
  selectAuthError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const authIsLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);
  return {
    user,
    isLoggedIn,
    isRefreshing,
    authIsLoading,
    authError,
  };
};
