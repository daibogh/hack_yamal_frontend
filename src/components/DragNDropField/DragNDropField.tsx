import React from 'react';
import style from './DragNDropField.module.scss';
import { DragNDropField as DragNDropFieldTemplate } from '@consta/uikit/DragNDropField';
import { Layout } from '../Layout';
interface DragNDropFieldProps {
  className?: string;
  label?: string;
}

const DragNDropField: React.FC<DragNDropFieldProps> = ({
  className,
  label,
}) => {
  return (
    <Layout direction="column">
      {label && <div className={`${style.label}`}>{label}</div>}
      <DragNDropFieldTemplate
        onDropFiles={(v) => console.log(v)}
      ></DragNDropFieldTemplate>
    </Layout>
  );
};

export default DragNDropField;
