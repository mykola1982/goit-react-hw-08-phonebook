import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

import { toast } from 'react-toastify';

import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

import {
  StyledForm,
  Label,
  Input,
  StyledErrorMessage,
  Button,
} from './EditForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  number: yup
    .string()
    .phone(null, true, 'Enter your phone number in the format +000000000000')
    .required(),
});

const idInputName = nanoid();
const idInputNumber = nanoid();

export const EditForm = ({ onClose, id, value }) => {
  const dispatch = useDispatch();
  // const error = useSelector(selectContactsError);

  const initialValues = {
    name: value.name,
    number: value.number,
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const data = { id, value: { name, number } };
    dispatch(updateContact(data))
      .unwrap()
      .then(() => {
        toast.success('Contact edited!');
        onClose();
      })
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page')
      );

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

        <Label htmlFor={idInputNumber}>Number</Label>
        <Input
          id={idInputNumber}
          type="tel"
          name="number"
          placeholder="+0000000000000"
        />
        <StyledErrorMessage name="number" component="p" />

        <Button type="submit">Edit contact</Button>
      </StyledForm>
    </Formik>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
