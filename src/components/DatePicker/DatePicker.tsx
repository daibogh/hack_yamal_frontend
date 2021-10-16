import React from 'react';
import style from './DatePicker.module.scss';
import { DatePicker as DatePickerTemplate } from '@consta/uikit/DatePickerCanary';
import { Layout } from '../Layout';
interface DatePickerProps {
  className?: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
  label?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  className,
  value,
  onChange,
  label,
}) => {
  return (
    <Layout direction="column">
      {label && <div className={`${style.label}`}>{label}</div>}
      <DatePickerTemplate
        onChange={({ value }) => onChange(value)}
        value={value}
        type="date"
        className={`${style.root} ${className}`}
      ></DatePickerTemplate>
    </Layout>
  );
};

export default DatePicker;
