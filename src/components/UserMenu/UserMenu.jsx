import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

import { Button, Text, Wrraper, Icon } from './UserMenu.styled';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <Wrraper>
      <Text> {user.email}</Text>
      <Button type="button" onClick={() => dispath(logOut())}>
        <spam>LogOut</spam> <Icon />
      </Button>
    </Wrraper>
  );
};
