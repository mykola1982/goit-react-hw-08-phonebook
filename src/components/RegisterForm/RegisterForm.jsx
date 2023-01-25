import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { register } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),

  email: yup
    .string()
    .email('Email must be a valid email')
    .required('This field is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('This field is required'),
});

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
  const { authError } = useAuth();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));

    if (authError) {
      toast.error(` Something went wrong...Try reloading the page`);
      return;
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
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
