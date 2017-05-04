import React from 'react';
import { Button, Heading, Header } from 'components';
import Modal from 'react-modal';

const Close = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1rem" height="1rem"
    fill="none"
    stroke="currentcolor" strokeWidth="4"
    className="dib">
    <path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"></path><path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179" />
  </svg>
);

const modalStyles = {
  content: {
    maxWidth: '32rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    borderColor: '#555',
  },
};

export const ColourSelectorModal = ({ isVisible, close, label, onSelect, value }) => (
  <Modal
    isOpen={isVisible}
    closeTimeoutMS={300}
    contentLabel={label}
    style={modalStyles}
  >
    <Header bg="mid-gray" color="white" className="flex items-stretch">
      <Heading
        f={5} pl={3} pv={3} mv={0}
        className="flex-auto fw4 ttu tracked">
        { label }
      </Heading>

      <Button
        onClick={close}>
        <Close />
      </Button>
    </Header>
  </Modal>
);
