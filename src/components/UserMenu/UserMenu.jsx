import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p> Welcom,{user.email}</p>
      <button type="button" onClick={() => dispath(logOut())}>
        LogOut
      </button>
    </div>
  );
};
