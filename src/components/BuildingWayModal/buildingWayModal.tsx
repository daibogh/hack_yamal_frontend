import { Button } from '@consta/uikit/Button';
import React, { useState } from 'react';
import { DragNDropField } from '../DragNDropField';
import { Modal } from '../Modal';
import './buildingWayModal.scss';

export const BuildingWayModal: React.FC = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Button onClick={() => setShow(true)}></Button>
      <Modal
        className="modal"
        header="Построение маршрута"
        footerLabel="Построить"
        show={show}
        onClose={() => setShow(false)}
      >
        <DragNDropField label="Характеристики флота" />
        <DragNDropField label="График отгрузки" />
      </Modal>
    </div>
  );
};
