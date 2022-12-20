import React from 'react';

// ** componentes 
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch as MuiSwitch
} from '@mui/material';

// ** Icones
import { MdLightbulbOutline } from 'react-icons/md';

// **types
interface SwithProps {
  title: string
  change: (value: string) => void
  status: 'on' | 'off'
}

export function Switch(props: SwithProps) {
  const initialState = props.status === 'on' ? true : false 
  const [checked, setChecked] = React.useState<boolean>(initialState);

  const handleChecked = () => {
    setChecked((prev: boolean) => !prev)
    props.change(!checked ? 'on' : 'off')
  }

  return (
    <List>
      <ListItem sx={{padding: 0 }}>
        <ListItemIcon>
          <MdLightbulbOutline size={22}/>
        </ListItemIcon>
        <ListItemText primary={props.title.toString().split(' ')[0]} />
        <MuiSwitch
          edge="end"
          onChange={handleChecked}
          checked={checked}
        />
      </ListItem>
    </List>
  );
}