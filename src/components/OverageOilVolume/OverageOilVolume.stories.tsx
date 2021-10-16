import React, { ComponentProps } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import OverageOilVolume from './OverageOilVolume';
import { ComponentStory } from '@storybook/react';
export default {
  title: `atoms|OverageOilVolume`,
  component: OverageOilVolume,
};

const OverageOilVolume_: ComponentStory<typeof OverageOilVolume> = (props) => {
  return (
    <Theme preset={presetGpnDefault}>
      <OverageOilVolume {...props} />
    </Theme>
  );
};
export const OverageOilVolumeExample1 = OverageOilVolume_.bind({});
OverageOilVolumeExample1.args = {
  title: 'Общий спрос на топливо',
  current: {
    label: 'Прирост за 2021 год',
    items: [
      { oilVolume: 1234 + 908, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868 + 658, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672 + 433, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491 + 390, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
  previous: {
    label: 'Данные 2020 года',
    items: [
      { oilVolume: 1234, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
};
export const OverageOilVolumeExample2 = OverageOilVolume_.bind({});
OverageOilVolumeExample2.args = {
  title: 'Спрос на топливо за август - сентябрь 2021',
  current: {
    label: 'Прирост за 2021 год',
    items: [
      { oilVolume: 1234 + 908, oilType: 'ДТ "А" ТУ' },
      { oilVolume: 868 + 658, oilType: 'ДТ "З" ГОСТ' },
      { oilVolume: 672 + 433, oilType: 'ДТ "А" ГОСТ' },
      { oilVolume: 491 + 390, oilType: 'ДТ "Л" ГОСТ' },
    ],
  },
};
