import React from 'react';

// **componentes
import {
  Box,
  TextField,
  Tab,
  Tabs,
  Typography
} from '@mui/material';

export function FormDevices() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', mb: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Câmeras" value={0} />
            <Tab label="Sonoff" value={1} />
          </Tabs>
        </Box>
      </Box>

      {value === 0 ? (<>
        <Typography variant='subtitle2'>
          Dados de exibição
        </Typography>
        <TextField
          fullWidth
          label="Nome do dispositivo"
          placeholder="Ex: Laboratório 2"
          margin='normal'
        />
        <TextField
          fullWidth
          label="Endereço de IP"
          placeholder="000.000.000.00"
          margin='normal'
        />

        <Typography variant='subtitle2' mt={2}>
          Dados de autenticação de câmera
        </Typography>
        <TextField
          fullWidth
          label="Usuário"
          placeholder="usuário da câmera"
          margin='normal'
        />
        <TextField
          fullWidth
          label="Senha"
          placeholder="*********"
          margin='normal'
          type="password"
        />
      </>)
        :
        (<>
          <Typography variant='subtitle2'>
            Dados de exibição
          </Typography>
          <TextField
            fullWidth
            label="Nome"
            placeholder="Ex: Lâmpada lab 2"
            margin='normal'
          />
          <TextField
            fullWidth
            label="Endereço de IP"
            placeholder="000.000.000.00"
            margin='normal'
          />
        </>)}
    </div>
  );
} 