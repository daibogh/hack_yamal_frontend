import React from 'react';
import style from './Button.module.scss';

import { Button as ButtonTemplate } from '@consta/uikit/Button';
interface ButtonProps {
  className?: string;
  size?: 'm' | 'xs' | 's' | 'l';
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, size, label, onClick }) => {
  return (
    <ButtonTemplate
      onClick={onClick}
      size={size}
      label={label}
      className={`${style.root} ${className}`}
    ></ButtonTemplate>
  );
};

export default Button;
