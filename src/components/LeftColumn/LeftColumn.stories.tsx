import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import LeftColumn from './LeftColumn';

export default {
  title: `atoms|LeftColumn`,
  component: LeftColumn,
};

export const LeftColumn_ = () => {
  return <Theme preset={presetGpnDefault}>
    <LeftColumn />
  </Theme>
};
