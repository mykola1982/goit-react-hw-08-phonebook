import { Helmet } from 'react-helmet';

// import { Section } from 'components/Section';
import { Container } from 'pages/Contacts/Contacts.styled';

const Contacts = () => {
  return (
    <main>
      <Container>
        <Helmet>
          <title>Contacts</title>
        </Helmet>

        {/* <Section title={'Contact List'}></Section> */}
      </Container>
    </main>
  );
};

export default Contacts;
