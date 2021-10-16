import React from 'react';
import './Table.scss';

import { Table as TableTemplate, TableColumn } from '@consta/uikit/Table';
import { Badge } from '../Badge';

enum Type {
  DTATY = 'ДТ "А" ТУ',
  DZGOST = 'ДТ "З" ГОСТ',
  DTAGOST = 'ДТ "А" ГОСТ'
}

const getColor = (type: Type) => {
  switch (type) {
    case Type.DZGOST:
      return 'normal';
    case Type.DTATY:
      return 'success';
    case Type.DTAGOST:
      return "system";
  }
};

interface Test {
  id: string;
  name: string;
  date: string;
  type: Type;
  count: number;
}

const columns: TableColumn<Test>[] = [
  {
    title: 'Дата поставки',
    accessor: 'date',
  },
  {
    title: 'Тип топлива',
    accessor: 'type',
    renderCell: (row: Test) => (
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

const rows: Test[] = [
  {
    id: '1',
    name: 'Антон',
    date: '28 августа 2021',
    type: Type.DTATY,
    count: 10,
  },
  {
    id: '2',
    name: 'Василий',
    date: '22 августа 2021',
    type: Type.DZGOST,
    count: 40,
  },
  {
    id: '3',
    name: 'Василий',
    date: '10 августа 2021',
    type: Type.DTAGOST,
    count: 13,
  },
];
interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  return (
    <TableTemplate
      columns={columns}
      rows={rows}
      borderBetweenRows
      headerVerticalAlign='center'
      verticalAlign="center"
      className={`${className} CustomTableRoot`}
    ></TableTemplate>
  );
};

export default Table;
