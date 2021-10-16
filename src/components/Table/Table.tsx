import React from 'react';
import './Table.scss';

import { Table as TableTemplate, TableColumn } from '@consta/uikit/Table';
import { Badge } from '../Badge';
import { useDeliveriesHistory } from '../../hooks/api/use-deliveries-history';

enum Type {
  DTATY = 'ДТ "А" ТУ',
  DZGOST = 'ДТ "З" ГОСТ',
  DTAGOST = 'ДТ "А" ГОСТ',
}

const getColor = (type: Type) => {
  switch (type) {
    case Type.DZGOST:
      return 'normal';
    case Type.DTATY:
      return 'success';
    case Type.DTAGOST:
      return 'system';
  }
};

interface DeliveryHistoryInstance {
  id: string;

  date: string;
  type: Type;
  count: number;
}

const columns: TableColumn<DeliveryHistoryInstance>[] = [
  {
    title: 'Дата поставки',
    accessor: 'date',
  },
  {
    title: 'Тип топлива',
    accessor: 'type',
    renderCell: (row: DeliveryHistoryInstance) => (
      <Badge
        view="stroked"
        status={getColor(row.type)}
        label={row.type}
      ></Badge>
    ),
  },
  {
    title: 'Количество (тыс.тонн)',
    accessor: 'count',
  },
];

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  const rows = useDeliveriesHistory();
  return (
    <TableTemplate
      columns={columns}
      rows={rows}
      borderBetweenRows
      headerVerticalAlign="center"
      verticalAlign="center"
      className={`${className} CustomTableRoot`}
    />
  );
};

export default Table;
