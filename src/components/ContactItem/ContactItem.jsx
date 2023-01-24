import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Avatar from 'react-avatar';

import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Avatar name={name} size="50" round={true} />
      <p>
        {name}:&nbsp;{number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
