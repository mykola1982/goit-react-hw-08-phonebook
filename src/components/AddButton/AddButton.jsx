import { useState } from 'react';
import { Modal } from 'components/Modal';
import { Button, Icon } from './AddButton.styled';

export const AddButton = () => {
  const [showModal, setShowmodal] = useState(false);

  const openModal = () => {
    setShowmodal(true);
  };
  const closeModal = () => {
    setShowmodal(false);
  };
  return (
    <>
      <Button type="button" onClick={openModal}>
        <span>Add contact</span> <Icon />
      </Button>
      {showModal && <Modal onClose={closeModal}></Modal>}
    </>
  );
};
