import React from 'react';
import style from './RouteCard.module.scss';
import './RouteCard.scss';
import { Collapse } from '@consta/uikit/Collapse';
import { useBoolean } from 'react-use';
import { Badge } from '@consta/uikit/Badge';
import cn from 'classnames';

interface RouteCardProps {
  boatInfo: {
    name: string;
    boatClass: string;
    power: number;
    liftingCapacity: number;
    length: number;
    width: number;
    osadka: string;
    liquidMeter: string;
    swimmingDistrict: string;
  };
  fromToWay: string;
  status: 'в пути' | 'стоит';
  path: {
    type: 'разгрузка' | 'загрузка из матки';
    lat: number;
    lon: number;
    name: string;
    passed: boolean;
  }[];
}

const RouteCard: React.FC<RouteCardProps> = ({
  boatInfo,
  fromToWay,
  status,
  path,
}) => {
  const [isOpen, toggle] = useBoolean(false);
  return (
    <div className="RouteCard">
      <Collapse
        isOpen={isOpen}
        onClick={toggle}
        //@ts-ignore
        label={
          <div className={style.cardHeader}>
            <div className={style.routeShortInfo}>
              <div className={style.margined35}>
                <div className={style.boatName}>{boatInfo.name}</div>
                <div className={style.shortRoute}>{fromToWay}</div>
              </div>
              <Badge view="stroked" label={status} />
            </div>
            <div className={style.boatClassInfo}>
              <div>Класс судна {boatInfo.boatClass}</div>
              <div>Мощность {boatInfo.power}</div>
              <div>Грузоподъемность {boatInfo.liftingCapacity}</div>
            </div>
            <div className={style.boatClassInfo}>
              <div>Длина {boatInfo.length}м</div>
              <div>Ширина {boatInfo.width}м</div>
              <div>Осадка {boatInfo.osadka}м</div>
            </div>
            <div className={style.boatClassInfo}>
              <div>Вид счетчика жидкости {boatInfo.liquidMeter}м</div>
              <div>Район плавания «{boatInfo.swimmingDistrict}»</div>
            </div>
          </div>
        }
        className={style.root}
      >
        <div className={style.placeContainer}>
          {path.map(({ type, name, passed }, key) => (
            <div
              key={key}
              className={cn(style.placeInfo, {
                [style.placeInfo__passed]: passed,
              })}
            >
              <div
                className={cn(style.ball, { [style.ball__passed]: passed })}
              />
              <div className={style.placeDescription}>
                <div className={style.placeName}>{name}</div>
                <div className={style.placeStatus}>{type}</div>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default RouteCard;
