import React from 'react';
import style from './Datetime.module.scss';
import { DateTime } from '@consta/uikit/DateTimeCanary';
interface DatetimeProps {
  className?: string;
}

const Datetime: React.FC<DatetimeProps> = ({ className }) => {
  return (
    <div className={`${style.root} ${className}`}>
      <DateTime view="slider" type="month" />
    </div>
  );
};

export default Datetime;
