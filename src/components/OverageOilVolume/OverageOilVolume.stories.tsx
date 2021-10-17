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
      { volume: 1234 + 908, type: 'ДТ "А" ТУ' },
      { volume: 868 + 658, type: 'ДТ "З" ГОСТ' },
      { volume: 672 + 433, type: 'ДТ "А" ГОСТ' },
      { volume: 491 + 390, type: 'ДТ "Л" ГОСТ' },
    ],
  },
  previous: {
    label: 'Данные 2020 года',
    items: [
      { volume: 1234, type: 'ДТ "А" ТУ' },
      { volume: 868, type: 'ДТ "З" ГОСТ' },
      { volume: 672, type: 'ДТ "А" ГОСТ' },
      { volume: 491, type: 'ДТ "Л" ГОСТ' },
    ],
  },
};
export const OverageOilVolumeExample2 = OverageOilVolume_.bind({});
OverageOilVolumeExample2.args = {
  title: 'Спрос на топливо за август - сентябрь 2021',
  current: {
    label: 'Прирост за 2021 год',
    items: [
      { volume: 1234 + 908, type: 'ДТ "А" ТУ' },
      { volume: 868 + 658, type: 'ДТ "З" ГОСТ' },
      { volume: 672 + 433, type: 'ДТ "А" ГОСТ' },
      { volume: 491 + 390, type: 'ДТ "Л" ГОСТ' },
    ],
  },
};
