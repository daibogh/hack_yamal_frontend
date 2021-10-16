import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Card from './Card';

export default {
  title: `atoms|Card`,
  component: Card,
};

export const Card_ = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Card />
    </Theme>
  );
};
