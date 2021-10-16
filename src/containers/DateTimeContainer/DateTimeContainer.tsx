import React from 'react';
import Card from '../../components/Card/Card';
import { Datetime } from '../../components/Datetime';

interface DateTimeContainerProps {
  className?: string;
}

const DateTimeContainer: React.FC<DateTimeContainerProps> = ({ className }) => {
  return (
    <Card>
      <Datetime />
    </Card>
  );
};

export default DateTimeContainer;
