import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContet } from './Modal.styled';
import { createPortal } from 'react-dom';
import { ContactForm } from 'components/ContactForm';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  useEffect(() => {
    const hendelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendelKeyDown);

    return () => {
      window.removeEventListener('keydown', hendelKeyDown);
    };
  }, [onClose]);

  const hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={hendleBackdropClick}>
      <ModalContet>
        <ContactForm onClose={onClose} />
      </ModalContet>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
