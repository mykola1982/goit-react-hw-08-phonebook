import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
  Button,
} from 'components/LoginForm/LoginForm.styled';

const idInputEmail = nanoid();
const idInputPassword = nanoid();

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledForm>
          <Label htmlFor={idInputEmail}>Email</Label>
          <Input
            id={idInputEmail}
            type="email"
            name="email"
            placeholder="Email"
          />
          <StyledErrorMessage name="email" component="p" />

          <Label htmlFor={idInputPassword}>Password</Label>
          <Input
            id={idInputPassword}
            type="password"
            name="password"
            placeholder="Password"
          />
          <StyledErrorMessage name="password" component="password" />

          <Button type="submit">Log in </Button>
        </StyledForm>
      </Formik>
    </>
  );
};
