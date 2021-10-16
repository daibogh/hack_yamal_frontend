import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import AppHeader from './AppHeader';

export default {
  title: `atoms|AppHeader`,
  component: AppHeader,
};

export const AppHeader_ = () => {
  return <Theme preset={presetGpnDefault}>
    <AppHeader />
  </Theme>
};
