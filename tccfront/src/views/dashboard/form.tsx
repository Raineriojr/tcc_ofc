import React from 'react';

// ** componentes
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  ListItemText,
  Checkbox,
  OutlinedInput
} from '@mui/material';

// ** constantes
const rooms = [
  'Biblioteca'
]

export function FormAddRoom() {
  const [room, setRoom] = React.useState<string[]>([]);

  const handleChangeRoom = (event: SelectChangeEvent<typeof room>) => {
    const {
      target: { value },
    } = event;
    setRoom(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ mt: 2, p: 0 }}>
      <InputLabel>Salas</InputLabel>
      <Select
        multiple
        value={room}
        onChange={handleChangeRoom}
        placeholder='Selecione as salas que deseja adicionar'
        input={<OutlinedInput label="Salas" />}
        renderValue={(selected) => selected.join(', ')}
      >
        {rooms.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={room.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}