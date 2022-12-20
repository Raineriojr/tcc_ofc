import React from 'react';

// **componentes
import {
  TextField,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  ListItemText,
  Checkbox,
  OutlinedInput
} from '@mui/material';

// ** constants
const sonoffList = [
  'Lâmpada lab. prog.',
  'Central lab. circ.',
  'Tomadas lab. circ.'
];

const cameraList = [
  'CAM. Lab. Programação',
  'CAM. Lab. Circuitos',
  'CAM. Biblioteca'
];

export function FormRooms() {
  const [camera, setCamera] = React.useState<string[]>([]);
  const [sonoff, setSonoff] = React.useState<string[]>([]);

  const handleChangeCamera = (event: SelectChangeEvent<typeof camera>) => {
    const {
      target: { value },
    } = event;
    setCamera(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeSonoff = (event: SelectChangeEvent<typeof sonoff>) => {
    const {
      target: { value },
    } = event;
    setSonoff(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <Typography variant='subtitle2'>
        Dados de exibição
      </Typography>
      <TextField
        fullWidth
        label="Nome"
        placeholder="Ex: Laboratório 2"
        sx={{ mt: 2 }}
      />

      <FormControl sx={{ mt: 2, p: 0 }}>
        <InputLabel>Câmeras</InputLabel>
        <Select
          multiple
          value={camera}
          onChange={handleChangeCamera}
          placeholder='Selecione as câmeras'
          input={<OutlinedInput label="Câmeras" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {cameraList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={camera.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 2, p: 0 }}>
        <InputLabel>Sonoffs</InputLabel>
        <Select
          multiple
          value={sonoff}
          onChange={handleChangeSonoff}
          placeholder='Selecione as sonoffs'
          input={<OutlinedInput label="Sonoffs" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {sonoffList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={sonoff.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
} 