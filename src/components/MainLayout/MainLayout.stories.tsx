import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import MainLayout from './MainLayout';

export default {
  title: `atoms|MainLayout`,
  component: MainLayout,
};

export const MainLayout_ = () => {
  return <Theme preset={presetGpnDefault}>
    <MainLayout />
  </Theme>
};
