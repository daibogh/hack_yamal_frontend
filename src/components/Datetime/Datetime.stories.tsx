import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Datetime from './Datetime';

export default {
  title: `atoms|Datetime`,
  component: Datetime,
};

export const Datetime_ = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Datetime />
    </Theme>
  );
};
