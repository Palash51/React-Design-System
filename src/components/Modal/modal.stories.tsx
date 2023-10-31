import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

// const Template: React.FC<ModalProps> = (args) => <Modal {...args} />;

const Template: React.FC<ModalProps> = (args)  => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
