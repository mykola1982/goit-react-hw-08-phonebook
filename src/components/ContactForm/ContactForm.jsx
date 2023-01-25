import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux/es/exports';
import { selectContacts } from 'redux/contacts/contactsSelectors';
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
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  number: yup
    .string()
    .phone(null, true, 'Enter your phone number in the format +000000000000')
    .required(),
});

const idInputName = nanoid();
const idInputNumber = nanoid();

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onClose }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const hasName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasName) {
      toast.error(`${name} is alredy in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    onClose();
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

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
