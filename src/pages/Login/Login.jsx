import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm';
import { Section } from 'components/Section';
import { Container } from 'pages/Login/Login.styled';

const Login = () => {
  return (
    <main>
      {' '}
      <Container>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <Section title={'Login to Phonebook'}>
          <LoginForm />
        </Section>
      </Container>
    </main>
  );
};

export default Login;
