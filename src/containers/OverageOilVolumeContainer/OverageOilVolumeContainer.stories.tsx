import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import OverageOilVolumeContainer from './OverageOilVolumeContainer';

export default {
  title: `container|OverageOilVolumeContainer`,
  component: OverageOilVolumeContainer,
};

export const OverageOilVolume_ = () => {
  return <Theme preset={presetGpnDefault}>
    <OverageOilVolumeContainer />
  </Theme>
};
