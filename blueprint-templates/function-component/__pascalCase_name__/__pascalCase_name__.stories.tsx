import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {{pascalCase name}} from './{{pascalCase name}}';

export default {
  title: `atoms|{{pascalCase name}}`,
  component: {{pascalCase name}},
};

export const {{pascalCase name}}_ = () => {
  return <Theme preset={presetGpnDefault}>
    <{{pascalCase name}} />;
  </Theme>
};
