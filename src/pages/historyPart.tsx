import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { IconCalendar } from '@consta/uikit/IconCalendar';

import { Select } from '../components/Select';

import { DefaultItem } from '@consta/uikit/Select';

import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';

import './historyPart.scss';
import { DatePicker } from '../components/DatePicker';
import { TextField } from '../components/TextField';

const items: DefaultItem[] = [
  {
    label: 'Все виды топлива',
    id: 1,
  },
  {
    label: 'ДТ "А" ТУ',
    id: 2,
  },
  {
    label: 'ДТ "З" ГОСТ',
    id: 3,
  },
  {
    label: 'ДТ "А" ГОСТ',
    id: 4,
  },
  {
    label: 'ДТ "Л" ГОСТ',
    id: 5,
  },
  {
    label: 'АИ-92-К5',
    id: 6,
  },
];

export const HistoryPart: React.FC = () => {
  const [type, setType] = useState<DefaultItem>({
    label: 'Все виды топлива',
    id: 1,
  });
  const [showModal, setShowModal] = useState(false);
  const [request, setRequest] = useState<{
    type?: DefaultItem;
    count: number;
    date: Date | null;
  }>({
    count: 0,
    date: new Date(),
  });

  return (
    <Layout direction="column" flex={1} className="history-part">
      <Layout className="history-header line" direction="row">
        <div className="history-label">История поставок</div>
        <div className="date">
          <IconCalendar className="icon-calendar" size="s" />
          2020-2021, август
        </div>
        <Select
          value={type}
          className="select"
          size="s"
          onChange={(v) => setType(v)}
          items={items}
        />
        <Button
          onClick={() => setShowModal(true)}
          className="button"
          label="Запросить поставку"
          size="s"
        />
      </Layout>
      <Table className="table" />
      <Modal
        className="modal"
        footerLabel="Запросить"
        header="Запрос на поставку"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <Layout className="modal" direction="column">
          <Select
            label="Тип топлива"
            value={request.type}
            className="select"
            size="m"
            onChange={(v) => setRequest({ ...request, type: v })}
            items={items}
          />
          <TextField label="Количество" />
          <DatePicker
            label="Дата"
            onChange={(v) => setRequest({ ...request, date: v })}
            value={request.date}
          />
        </Layout>
      </Modal>
    </Layout>
  );
};
