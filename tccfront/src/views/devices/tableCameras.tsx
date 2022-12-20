import React from 'react';

// ** Componentes
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tab,
  Tabs
} from '@mui/material';

// ** icones
import { MdAdd } from 'react-icons/md';

// ** types
interface Column {
  id: 'id' | 'ip' | 'name';
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
  }
];

interface Data {
  id: number;
  ip: string;
  name: string;
}

function createData(
  id: number,
  ip: string,
  name: string,
): Data {
  return { id, ip, name };
}

export function CamerasTable() {

  const cameras = [
    createData(1, '192.168.2.10', 'CAM. Lab. Programação'),
    createData(2, '192.168.2.11', 'CAM. Lab. Circuitos'),
    createData(3, '192.168.2.12', 'CAM. Biblioteca')
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
          {cameras.map((row) => {
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