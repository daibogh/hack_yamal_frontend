import React, { useMemo, useState } from 'react';
import style from './DragNDropField.module.scss';
import { DragNDropField as DragNDropFieldTemplate } from '@consta/uikit/DragNDropField';
import { Layout } from '../Layout';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';

interface DragNDropFieldProps {
  className?: string;
  label?: string;
}

const DragNDropField: React.FC<DragNDropFieldProps> = ({
  className,
  label,
}) => {
  const [file, setFile] = useState<File>();
  useMemo(() => {
    console.log(file);
  }, [file]);

  return (
    <Layout direction="column">
      {label && <div className={`${style.label}`}>{label}</div>}
      <DragNDropFieldTemplate
        multiple={false}
        onDropFiles={(v) => (console.log(v), v.length > 0 ? setFile(v[0]) : {})}
      >
        {file && (
          <Layout>
            <Text>Вы загрузили файл: </Text>
            <Text className={`${style.file}`} >{file.name}</Text>
            {/* <Button
              className={`${style.icon}`}
              view="clear"
              onlyIcon
              iconSize="s"
              iconLeft={IconClose}
              onClick={() => {}}
            /> */}
          </Layout>
        )}
      </DragNDropFieldTemplate>
    </Layout>
  );
};

export default DragNDropField;
