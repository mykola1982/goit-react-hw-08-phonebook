import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';
import { Section } from 'components/Section';
import { Container } from './Register.styled';

const Register = () => {
  return (
    <main>
      <Container>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <Section title={'Sign up for the Phonebook'}>
          <RegisterForm />
        </Section>
      </Container>
    </main>
  );
};

export default Register;
