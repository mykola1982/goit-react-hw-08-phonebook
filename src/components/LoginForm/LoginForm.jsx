import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
  Button,
} from 'components/LoginForm/LoginForm.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('This field is required'),
  password: yup.string().required('This field is required'),
});

const idInputEmail = nanoid();
const idInputPassword = nanoid();

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {})
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
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
