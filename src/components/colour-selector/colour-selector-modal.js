import React from 'react';
import { Block, Button, Heading, Header } from 'components';
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
    maxWidth: '36rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    borderColor: '#333',
    borderWidth: '0.25rem',
    borderRadius: 0,
  },
};

export const ColourSelectorModal = ({ isVisible, close, label, children }) => (
  <Modal
    isOpen={isVisible}
    closeTimeoutMS={300}
    contentLabel={label}
    style={modalStyles}
  >
    <Header bg="dark-gray" color="white" className="flex items-stretch">
      <Heading
        f={5} pl={3} pv={3} mv={0}
        className="flex-auto fw8 ttu tracked">
        { label }
      </Heading>

      <Button ba="transparent" onClick={close}>
        <Close />
      </Button>
    </Header>

    <Block
      pa={3}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(4rem, 1fr))',
        gridAutoRows: 'minmax(4rem, auto)',
        gridAutoFlow: 'dense',
      }}
    >
      { children }
    </Block>
  </Modal>
);
