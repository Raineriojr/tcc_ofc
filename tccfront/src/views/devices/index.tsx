import React from 'react';

// ** Componentes
import {
  Box,
  Button,
  Paper,
  Typography,
  Tab,
  Tabs
} from '@mui/material';
import { Modal } from '../../components/modal';
import { CamerasTable } from './tableCameras';
import { SonoffTable } from './tableSonoff';
import { FormDevices } from './form';

// ** icones
import { MdAdd } from 'react-icons/md';

export function Devices() {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Modal 
        open={open} 
        setOpen={setOpen}
        title="Cadastro de dispositivos"
        component={<FormDevices />}
      />

      <Box mb={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h4'>
          Dispositivos
        </Typography>

        <Button
          title='Adicionar'
          variant="contained"
          startIcon={<MdAdd size={22} />}
          onClick={() => setOpen(true)}
        >
          Novo Dispositivo
        </Button>
      </Box>
      <Paper sx={{ px: 4, py: 4, mb: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Câmeras" value={0} />
            <Tab label="Sonoffs" value={1} />
          </Tabs>
        </Box>
        <div>
          {value === 0 ? 
          (
            <CamerasTable />
          )
          : 
          (
            <SonoffTable />
          )} 
        </div>
      </Paper>
    </Box>
  )
}