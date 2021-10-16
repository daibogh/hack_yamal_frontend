import React, { ComponentProps } from 'react';

import Select from './Select';

export default {
  title: `atoms|Select`,
  component: Select,
};

export const Select_: React.FC<ComponentProps<typeof Select>> = (props) => {
  return <Select {...props} />;
};
