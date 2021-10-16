import React from 'react';
import { HistoryPart } from './historyPart';

export const MainPage: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {children}
      <div style={{ background: 'red', width: '40%' }}>J</div>
      <HistoryPart />
    </div>
  );
};
