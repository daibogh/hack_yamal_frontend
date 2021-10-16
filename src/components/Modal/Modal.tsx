import React, { useRef } from 'react';
import style from './Modal.module.scss';
import { Modal as ModalTemplate } from '@consta/uikit/Modal';
import { Layout } from '../Layout';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import useClickOutside from 'use-click-outside';
interface ModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  header: string;
  footerLabel: string;
}

const Modal: React.FC<ModalProps> = ({
  className,
  show,
  onClose,
  header,
  footerLabel,
  children,
}) => {
  const ref = useRef<any>(null);
  useClickOutside(ref, onClose);

  return (
    <ModalTemplate
      onEsc={onClose}
      hasOverlay
      isOpen={show}
      className={`${style.root} ${className}`}
    >
      <Layout className={`${style.modal} ${className}`} direction="column">
        <Layout className={`${style.header}`}>
          <div className={`${style.headerText}`} ref={ref}>
            {header}
          </div>
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
            <Button
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