import React from 'react';

// ** Componentes
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { SwitchDevices } from '../../components/switchDevices';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Switch } from '../../components/switch';
import { api } from '../../services/services';

// ** types
interface Column {
  id: 'id' | 'ip' | 'name' | 'status' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'id',
    label: 'ID',
    minWidth: 50
  },
  {
    id: 'ip',
    label: 'Endereço IP',
    minWidth: 120
  },
  {
    id: 'name',
    label: 'Nome',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Ações',
    minWidth: 20,
    align: 'right'
  },
];

interface Data {
  id: number;
  ip: string;
  name: string;
  status: React.ReactNode
  action: React.ReactNode
}

function createData(
  id: number,
  ip: string,
  name: string,
  status: React.ReactNode,
  action: React.ReactNode
): Data {
  return { id, ip, name, status, action };
}

export function SonoffTable() {
  const sonoff = [
    createData(1, '192.168.2.101', 'Lâmpada lab. prog.', <SwitchDevices />, <><MdEdit size={22} /><MdDelete size={22} /></>),
    createData(2, '10.1.41.197', 'Central lab. circ.', <SwitchDevices status/>, <><MdEdit size={22} /><MdDelete size={22} /></>),
    createData(3, '192.168.2.102', 'Tomadas lab. circ.', <SwitchDevices />, <><MdEdit size={22} /><MdDelete size={22} /></>)
  ];

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sonoff.map((row) => {
            return (
              <TableRow tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {
                        column.format && typeof value === 'number'
                          ? column.format(value)
                          : value
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}