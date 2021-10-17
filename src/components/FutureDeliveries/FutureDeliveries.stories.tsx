import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import FutureDeliveries from './FutureDeliveries';
import { ComponentStory } from '@storybook/react';

export default {
  title: `atoms|FutureDeliveries`,
  component: FutureDeliveries,
};

const FutureDeliveries_: ComponentStory<typeof FutureDeliveries> = (props) => {
  return (
    <Theme preset={presetGpnDefault}>
      <div style={{ width: 560 }}>
        <FutureDeliveries {...props} />
      </div>
    </Theme>
  );
};

export const FutureDeliveriesExample = FutureDeliveries_.bind({});
FutureDeliveriesExample.args = {
  items: [
    {
      type: 'ДТ "А" ТУ',
      date: '10 сентября 2021',
      amount: 100,
      status: 'СОГЛАСОВАНА',
    },
    {
      type: 'ДТ "А" ГОСТ',
      date: '10 сентября 2021',
      amount: 200,
      status: 'НОВАЯ',
    },
    {
      type: 'ДТ "Л" ГОСТ',
      date: '10 сентября 2021',
      amount: 120,
      status: 'НОВАЯ',
    },
    {
      type: 'ДТ "А" ТУ',
      date: '10 сентября 2021',
      amount: 120,
      status: 'СОГЛАСОВАНА',
    },
    {
      type: 'АИ-92-К5',
      date: '10 сентября 2021',
      amount: 110,
      status: 'НОВАЯ',
    },
    {
      type: 'ДТ “А” ТУ',
      date: '10 сентября 2021',
      amount: 180,
      status: 'СОГЛАСОВАНА',
    },
  ],
};
