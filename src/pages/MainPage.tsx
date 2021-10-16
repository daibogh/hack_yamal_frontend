import React from 'react';
import { MainLayout } from '../components/MainLayout';

export const MainPage: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <MainLayout />
      {children}
    </div>
  );
};
