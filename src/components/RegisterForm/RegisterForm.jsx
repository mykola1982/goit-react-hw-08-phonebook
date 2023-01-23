import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import { register } from 'redux/auth/authOperations';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

const idInputName = nanoid();
const idInputEmail = nanoid();
const idInputPassword = nanoid();

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <Label htmlFor={idInputName}>Name</Label>
        <Input id={idInputName} type="text" name="name" placeholder="Name" />
        <StyledErrorMessage name="name" component="p" />

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

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
