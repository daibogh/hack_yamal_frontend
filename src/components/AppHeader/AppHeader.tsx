import React, { useState } from 'react';
import style from './AppHeader.module.scss';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Avatar } from '@consta/uikit/Avatar';
import { useCurrentRoute } from '../../hooks/use-current-route';
import { useHistory } from 'react-router-dom';
import { ContextMenu } from '../ContextMenu';
import './AppHeader.scss';
import { BuildingWayModal } from '../BuildingWayModal/buildingWayModal';
import { useLogout } from '../../hooks/auth';

const items: { id: number; name: string }[] = [
  { id: 1, name: 'Построить маршрут' },
  { id: 2, name: 'Посмотреть архив маршрутов' },
];

interface AppHeaderProps {
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
  const { isClient } = useCurrentRoute();
  const history = useHistory();
  const logout = useLogout();

  const [showBuildingModal, setShowBuildingModal] = useState(false);

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
          <span onClick={logout} className={style.logout}>
            выйти
          </span>
        </div>
        <Avatar name={userFullName} />
        <ContextMenu
          onSelect={(v) =>
            v.id === 1
              ? setShowBuildingModal(true)
              : history.push('/stakeholder/routes')
          }
          items={items}
        />
      </div>
      <BuildingWayModal
        show={showBuildingModal}
        onClose={() => setShowBuildingModal(false)}
      />
    </div>
  );
};

export default AppHeader;
