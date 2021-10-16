import React from 'react';
import style from './Card.module.scss';
import { Card as Card_ } from '@consta/uikit/Card';
interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <Card_
      verticalSpace="s"
      horizontalSpace="l"
      className={`${style.root} ${className}`}
    >
      {children}
    </Card_>
  );
};

export default Card;
