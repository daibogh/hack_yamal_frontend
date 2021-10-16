import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import FutureDeliveriesContainer from './FutureDeliveriesContainer';

export default {
  title: `container|FutureDeliveriesContainer`,
  component: FutureDeliveriesContainer,
};

export const FutureDeliveries_ = () => {
  return <Theme preset={presetGpnDefault}>
    <FutureDeliveriesContainer />
  </Theme>
};
