import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Avatar from 'react-avatar';

import PropTypes from 'prop-types';
import { Item, Button, IconDel, IconEdit } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Avatar name={name} size="50" round={true} />
      <p>
        {name}:&nbsp;{number}
      </p>
      <ul>
        <li>
          <Button type="button" onClick={() => {}}>
            <IconEdit />
          </Button>
        </li>
        <li>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <IconDel />
          </Button>
        </li>
      </ul>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
