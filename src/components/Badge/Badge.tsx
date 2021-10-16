import React from 'react';
import style from './Badge.module.scss';
import { Badge as BadgeTemplate } from '@consta/uikit/Badge';

interface BadgeProps {
  className?: string;
  label?: string;
  status?: 'error' | 'normal' | 'success' | 'warning' | 'system';
  view?:"filled" | "stroked" ;
}

const Badge: React.FC<BadgeProps> = ({ className, label, status , view}) => {
  return (
    <BadgeTemplate
    view={view}
      status={status}
      label={label}
      className={`${style.root} ${className}`}
    ></BadgeTemplate>
  );
};

export default Badge;
