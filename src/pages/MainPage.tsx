import React from 'react';
import { Link } from 'react-router-dom';
export const MainPage: React.FC = ({ children }) => {
  return (
    <div>
      <Link to="/producer">to producer</Link>
      <br />
      <Link to="/stakeholder">to stakeholder</Link>
      <div>main container</div>
      {children}
    </div>
  );
};
