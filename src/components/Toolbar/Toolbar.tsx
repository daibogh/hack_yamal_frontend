import { IconDownload } from '@consta/uikit/IconDownload';
import { DefaultItem } from '@consta/uikit/Select';
import React, { useState } from 'react';
import { items } from '../../pages/historyPart';
import { Button } from '@consta/uikit/Button';
import { DatePicker } from '../DatePicker';
import { Layout } from '../Layout';
import { Select } from '../Select';
import style from './Toolbar.module.scss';
import cn from 'classnames';
import { IconList } from '@consta/uikit/IconList';
import { IconMap } from '@consta/uikit/IconMap';

type ToolbarProps =
  | {
      className?: string;
      listViewEnabled?: boolean;
      setView?: (val: 'list' | 'map') => void;
      view?: 'list' | 'map';
    }
  | {
      className?: string;
      listViewEnabled: boolean;
      setView: (val: 'list' | 'map') => void;
      view: 'list' | 'map';
    };

const Toolbar: React.FC<ToolbarProps> = ({
  className,
  listViewEnabled,
  setView,
  view,
}) => {
  const [type, setType] = useState<DefaultItem>({
    label: 'Все виды топлива',
    id: 1,
  });
  return (
    <Layout className={cn('toolbar')}>
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
        {listViewEnabled && (
          <Button
            className="list"
            size="s"
            iconLeft={view === 'map' ? IconList : IconMap}
            onClick={() => (setView as any)(view === 'map' ? 'list' : 'map')}
          />
        )}
        <Button className="download" size="s" iconLeft={IconDownload} />
      </div>
    </Layout>
  );
};

export default Toolbar;
