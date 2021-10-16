import React from 'react';
import style from './AppHeader.module.scss';
import './AppHeader.scss';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Avatar } from '@consta/uikit/Avatar';
import { useCurrentRoute } from '../../hooks/use-current-route';
import { Link } from 'react-router-dom';
interface AppHeaderProps {
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
  const { isClient } = useCurrentRoute();
  const userFullName = isClient ? 'Дмитриев Александр' : 'Иванов Иван'; // TODO 2) Mock на инфу о пользователе
  const pages = [
    {
      label: (
        <div className={style.logo}>
          <span className={style.logoFirstChar}>R</span>ocket Logistics
        </div>
      ),
      isActive: true,
    },
    isClient && {
      label: 'Салехард', // TODO: 1) MOCK на название города для клиента
      isActive: true,
    },
  ].filter(Boolean) as { label: React.ReactNode; isActive: boolean }[];
  return (
    <div className={`${style.root} ${className} AppHeader`}>
      <Breadcrumbs
        pages={pages}
        size={'m'}
        maxCount={3}
        getLabel={(page) => page.label}
        getIsActive={(page) => !!page.isActive}
        getLink={(page) => ''}
        onClick={(page, e) => {
          e.preventDefault();
        }}
      />
      <div className={style.userBlock}>
        <div className={style.userInfo}>
          <div className={style.userName}>{userFullName}</div>
          <Link to="/login" className={style.logout}>
            выйти
          </Link>
        </div>
        <Avatar name={userFullName} />
      </div>
    </div>
  );
};

export default AppHeader;
