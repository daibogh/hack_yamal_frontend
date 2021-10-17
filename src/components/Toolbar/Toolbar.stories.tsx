import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Toolbar from './Toolbar';

export default {
  title: `atoms|Toolbar`,
  component: Toolbar,
};

export const Toolbar_ = () => {
  return <Theme preset={presetGpnDefault}>
    <Toolbar />
  </Theme>
};
