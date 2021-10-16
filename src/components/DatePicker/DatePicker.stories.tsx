import React, { ComponentProps } from 'react';

import DatePicker from './DatePicker';

export default {
  title: `atoms|DatePicker`,
  component: DatePicker,
};

export const DatePicker_: React.FC<ComponentProps<typeof DatePicker>> = (
  props
) => {
  return <DatePicker {...props} />;
};
