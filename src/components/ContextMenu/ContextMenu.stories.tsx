import React, { ComponentProps } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import ContextMenu from './ContextMenu';

export default {
  title: `atoms|ContextMenu`,
  component: ContextMenu,
};

export const ContextMenu_: React.FC<ComponentProps<typeof ContextMenu>> = (
  props
) => {
  return (
    <Theme preset={presetGpnDefault}>
      <ContextMenu {...props} />
    </Theme>
  );
};
