import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import RightColumn from './RightColumn';

export default {
  title: `atoms|RightColumn`,
  component: RightColumn,
};

export const RightColumn_ = () => {
  return <Theme preset={presetGpnDefault}>
    <RightColumn />
  </Theme>
};
