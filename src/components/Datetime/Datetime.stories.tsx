import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Datetime from './Datetime';
import { Layout } from '@consta/uikit/LayoutCanary';
export default {
  title: `atoms|Datetime`,
  component: Datetime,
};

export const Datetime_ = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Layout>
        <Layout flex={1}>
          <Datetime />
        </Layout>
      </Layout>
    </Theme>
  );
};
