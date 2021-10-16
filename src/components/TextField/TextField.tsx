import React from 'react';
import style from './TextField.module.scss';
import { TextField as TextFieldTemplate } from '@consta/uikit/TextField';
import { Layout } from '../Layout';

interface TextFieldProps {
  className?: string;
  label?:string;
}

const TextField: React.FC<TextFieldProps> = ({ className, label }) => {
  return (
    <Layout direction="column">
    {label && <div className={`${style.label}`}>{label}</div>}
    <TextFieldTemplate
      value="10"
      className={`${style.root} ${className}`}
    ></TextFieldTemplate>
    </Layout>
  );
};

export default TextField;
