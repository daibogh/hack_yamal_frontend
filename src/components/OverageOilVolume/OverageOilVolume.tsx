import React from 'react';
import style from './OverageOilVolume.module.scss';
import { Bar } from '@consta/charts/Bar';
import { Layout } from '@consta/uikit/LayoutCanary';
import { Header } from '@consta/uikit/Header';
import { Card } from '@consta/uikit/Card';
import { useMemo } from 'react';
type Stats = {
  label: string;
  items: StatsItem[];
};
type ChartStats = Omit<StatsItem, 'oilVolume'> & {
  label: string;
  Количество: StatsItem['oilVolume'];
};
type StatsItem = {
  oilType: string;
  oilVolume: number;
};
interface OverageOilVolumeProps {
  className?: string;
  previous?: Stats;
  current: Stats;
  title: string;
}

const OverageOilVolume: React.FC<OverageOilVolumeProps> = ({
  className,
  previous,
  current,
  title,
}) => {
  const data: ChartStats[] = useMemo(
    () => [
      ...(previous?.items || ([] as StatsItem[])).map((item) => ({
        ...item,
        Количество: item.oilVolume,
        label: previous?.label || '',
      })),
      ...current.items.map((item) => ({
        ...item,
        Количество: item.oilVolume,
        label: current.label,
      })),
    ],
    []
  );
  return (
    <div className={style.root}>
      <Header leftSide={title} className={style.header} />
      <div className={style.content}>
        <Bar
          data={data}
          style={{ marginBottom: 'var(--space-m)' }}
          xField="Количество"
          yField="oilType"
          seriesField={!!previous ? 'label' : undefined}
          isGroup={!!previous}
          color={!!previous ? ['#0094FF', '#0059DF'] : ['#0059DF']}
          label={{
            position: 'middle',
            layout: [
              { type: 'interval-adjust-position' },
              { type: 'interval-hide-overlap' },
            ],
            style: {
              fill: 'white',
            },
          }}
        />
      </div>
    </div>
  );
};

export default OverageOilVolume;
