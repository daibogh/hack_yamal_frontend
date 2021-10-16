import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import DateTimeContainer from './DateTimeContainer';
import { Layout } from '@consta/uikit/LayoutCanary';
export default {
  title: `container|DateTimeContainer`,
  component: DateTimeContainer,
};

export const DateTime_ = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Layout>
        <DateTimeContainer />
      </Layout>
    </Theme>
  );
};
