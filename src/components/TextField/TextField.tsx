import React from 'react';
import style from './TextField.module.scss';
import { TextField as TextFieldTemplate } from '@consta/uikit/TextField';
import { Layout } from '../Layout';

interface TextFieldProps {
  className?: string;
  label?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  className,
  label,
  value,
  onChange,
}) => {
  return (
    <Layout direction="column">
      {label && <div className={`${style.label}`}>{label}</div>}
      <TextFieldTemplate
        onChange={({ value }) => onChange && onChange(value)}
        value={value}
        className={`${style.root} ${className}`}
      ></TextFieldTemplate>
    </Layout>
  );
};

export default TextField;
