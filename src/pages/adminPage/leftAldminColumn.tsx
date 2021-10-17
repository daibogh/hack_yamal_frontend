import { Button } from '@consta/uikit/Button';
import { DefaultItem } from '@consta/uikit/Select';
import React, { useState } from 'react';
import { DatePicker } from '../../components/DatePicker';
import { Layout } from '../../components/Layout';
import { Select } from '../../components/Select';
import { items } from '../historyPart';
import { CityMaps } from './cityMaps';
import { IconList } from '@consta/uikit/IconList';
import { IconDownload } from '@consta/uikit/IconDownload';
import './leftAdminColumns.scss';

export const LeftAdminColumn: React.FC = ({ children }) => {
  const [type, setType] = useState<DefaultItem>({
    label: 'Все виды топлива',
    id: 1,
  });

  return (
    <Layout direction="column">
      <Layout className="toolbar">
        <div className="filters">
          <DatePicker
            size="s"
            className="date"
            value={new Date()}
            onChange={() => {}}
          />
          <DatePicker
            size="s"
            className="date"
            value={new Date()}
            onChange={() => {}}
          />
          <Select
            value={type}
            className="select"
            size="s"
            onChange={(v) => setType(v)}
            items={items}
          />
        </div>
        <div>
          {/* <Button className="list" size="s" iconLeft={IconList} /> */}
          <Button className="download" size="s" iconLeft={IconDownload} />
        </div>
      </Layout>
      <CityMaps />
    </Layout>
  );
};
