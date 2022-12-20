import React from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Modal } from '../../components/modal';
import { FormRooms } from './form';

// ** icones
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';

// ** types
interface Column {
  id: 'id' | 'name' | 'camera' | 'sonoff' | 'action';
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
    id: 'name',
    label: 'Nome',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'camera',
    label: 'Câmeras',
    minWidth: 50
  },
  {
    id: 'sonoff',
    label: 'Sonoffs',
    minWidth: 50
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
  name: string;
  camera: string;
  sonoff: string;
  action: React.ReactNode
}

function createData(
  id: number,
  name: string,
  camera: string,
  sonoff: string,
  action: React.ReactNode
): Data {
  return { id, name, camera, sonoff, action };
}

export function Rooms() {
  const [open, setOpen] = React.useState(false);

  const rooms = [
    createData(1, 'Lab. Programação', '1', '2', <><MdEdit size={22} /><MdDelete size={22} /></>),
    createData(2, 'Lab. Circuitos', '1', '1', <><MdEdit size={22} /><MdDelete size={22} /></>),
    createData(3, 'Biblioteca', '1', '0', <><MdEdit size={22} /><MdDelete size={22} /></>),
  ];

  return (
    <Box>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Criar sala"
        component={<FormRooms />}
      />

      <Box mb={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h4'>
          Salas
        </Typography>

        <Button
          title='Adicionar'
          variant="contained"
          startIcon={<MdAdd size={22} />}
          onClick={() => setOpen(true)}
        >
          Nova sala
        </Button>
      </Box>

      <Paper sx={{ px: 4, py: 4, mb: 2 }}>
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
              {rooms.map((row) => {
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
      </Paper>
    </Box>
  )
}