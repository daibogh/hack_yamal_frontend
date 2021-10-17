import React from 'react';
import style from './Modal.module.scss';
import { Modal as ModalTemplate } from '@consta/uikit/Modal';
import { Layout } from '../Layout';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';

interface ModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  header: string;
  footerLabel: string;
  onApply:()=> void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  show,
  onClose,
  header,
  footerLabel,
  children,
  onApply
}) => {
  return (
    <ModalTemplate
      onEsc={onClose}
      hasOverlay
      isOpen={show}
      className={`${style.root} ${className}`}
    >
      <Layout className={`${style.modal} ${className}`} direction="column">
        <Layout className={`${style.header}`}>
          <div className={`${style.headerText}`}>{header}</div>
          <Button
            className={`${style.icon}`}
            view="clear"
            onlyIcon
            iconSize="s"
            iconLeft={IconClose}
            onClick={() => onClose()}
          />
        </Layout>
        <Layout className={`${style.info}`} direction="column">
          {children}
          <Layout className={`${style.footer}`}>
            <Button onClick={onApply}
              className={`${style.button}`}
              size="s"
              label={footerLabel}
            ></Button>
          </Layout>
        </Layout>
      </Layout>
    </ModalTemplate>
  );
};

export default Modal;
