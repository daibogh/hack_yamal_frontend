import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { CityMaps } from './cityMaps';
import './leftAdminColumns.scss';
import { Toolbar } from '../../components/Toolbar';

export const LeftAdminColumn: React.FC = ({ children }) => {
  return (
    <Layout direction="column">
      <Toolbar />
      <CityMaps />
    </Layout>
  );
};
