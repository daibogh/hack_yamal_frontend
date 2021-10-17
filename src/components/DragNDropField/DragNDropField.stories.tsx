import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import DragNDropField from './DragNDropField';

export default {
  title: `atoms|DragNDropField`,
  component: DragNDropField,
};

export const DragNDropField_ = () => {
  return <Theme preset={presetGpnDefault}>
    <DragNDropField />
  </Theme>
};
