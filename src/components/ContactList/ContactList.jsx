import { useSelector } from 'react-redux/es/exports';
import {
  selectVisibleContacts,
  // selectContacts,
} from 'redux/contacts/contactsSelectors';

import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  // const contacts = useSelector(selectContacts);

  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
