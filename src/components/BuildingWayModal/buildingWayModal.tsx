import { Button } from '@consta/uikit/Button';
import React, { useState } from 'react';
import { DragNDropField } from '../DragNDropField';
import { Modal } from '../Modal';
import './buildingWayModal.scss';

interface BuildingWayModalProps {
  show: boolean;
  onClose: () => void;
}

export const BuildingWayModal: React.FC<BuildingWayModalProps> = ({
  children,
  show,
  onClose,
}) => {
  return (
    <Modal
      onApply={onClose}
      className="modal"
      header="Построение маршрута"
      footerLabel="Построить"
      show={show}
      onClose={onClose}
    >
      <DragNDropField label="Характеристики флота" />
      <DragNDropField label="График отгрузки" />
    </Modal>
  );
};
