import React, { ComponentProps } from 'react';
import style from './Button.module.scss';

import { Button as ButtonTemplate } from '@consta/uikit/Button';

const Button: React.FC<ComponentProps<typeof ButtonTemplate>> = ({
  className,
  size,
  label,
  onClick,
  view,
}) => {
  return (
    <ButtonTemplate
      onClick={onClick}
      size={size}
      label={label}
      className={`${style.root} ${className}`}
      view={view}
    ></ButtonTemplate>
  );
};

export default Button;
