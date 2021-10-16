import React, { ComponentProps } from 'react';

import Modal from './Modal';

export default {
  title: `atoms|Modal`,
  component: Modal,
};

export const Modal_: React.FC<ComponentProps<typeof Modal>> = (props) => {
  return <Modal {...props} />;
};
