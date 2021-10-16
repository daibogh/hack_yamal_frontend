import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import {{pascalCase name}}Container from './{{pascalCase name}}Container';

export default {
  title: `container|{{pascalCase name}}Container`,
  component: {{pascalCase name}}Container,
};

export const {{pascalCase name}}_ = () => {
  return <Theme preset={presetGpnDefault}>
    <{{pascalCase name}}Container />
  </Theme>
};
