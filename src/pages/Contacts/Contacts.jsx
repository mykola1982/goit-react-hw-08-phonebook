import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { Section } from 'components/Section';

import { Filter } from 'components/Filter';
import { Container } from 'pages/Contacts/Contacts.styled';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import { Text } from 'pages/Contacts/Contacts.styled';

import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { AddButton } from 'components/AddButton/AddButton';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsIsLoading = useSelector(selectContactsIsLoading);
  const contactsError = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <Helmet>
          <title>Contacts</title>
        </Helmet>

        <Section title={'Contact List'}>
          <AddButton />
          <Filter />
          {contactsIsLoading && !contactsError && <Loader />}
          {contactsError && <Text>{contactsError}</Text>}
          <ContactList />
        </Section>
      </Container>
    </main>
  );
};

export default Contacts;
