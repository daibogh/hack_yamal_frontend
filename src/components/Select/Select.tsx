import React from 'react';
import style from './Select.module.scss';

import { Select as SelectTemplate, DefaultItem } from '@consta/uikit/Select';
import { Layout } from '../Layout';

interface SelectProps {
  className?: string;
  items: DefaultItem[];
  onChange: (value: DefaultItem) => void;
  size?: 'xs' | 's' | 'm' | 'l' | undefined;
  value?: DefaultItem;
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  className,
  items,
  onChange,
  size,
  value,
  label,
}) => {
  return (
    <div className={style.root}>
      {label && <div className={`${style.label}`}>{label}</div>}
      <SelectTemplate
        value={value}
        size={size}
        onChange={({ value }) => value && onChange(value)}
        items={items}
        className={`${style.root} ${className}`}
      ></SelectTemplate>
    </div>
  );
};

export default Select;
