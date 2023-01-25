import { useState } from 'react';
import { Modal } from 'components/Modal';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/contactsOperations';
import Avatar from 'react-avatar';

import { EditForm } from 'components/EditForm/EditForm';
import PropTypes from 'prop-types';
import { Item, Button, IconDel, IconEdit } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [showModal, setShowmodal] = useState(false);

  const openModal = () => {
    setShowmodal(true);
  };
  const closeModal = () => {
    setShowmodal(false);
  };

  return (
    <>
      <Item>
        <Avatar name={name} size="50" round={true} />
        <p>
          {name}:&nbsp;{number}
        </p>
        <ul>
          <li>
            <Button type="button" onClick={openModal}>
              <IconEdit />
            </Button>
          </li>
          <li>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              <IconDel />
            </Button>
          </li>
        </ul>
      </Item>

      {showModal && (
        <Modal onClose={closeModal}>
          <EditForm onClose={closeModal} value={{ name, number }} id={id} />
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
