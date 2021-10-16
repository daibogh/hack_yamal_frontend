import React from 'react';
import style from './Icon.module.scss';
import { Icon as IconTemplate } from '@consta/uikit/Icon';
import { IconCalendar } from '@consta/uikit/IconCalendar';

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return <IconTemplate view='alert' className={`${style.root} ${className}`}></IconTemplate>;
};

export default Icon;
