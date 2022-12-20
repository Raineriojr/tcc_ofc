import React from 'react';

//** Components
import {
  Avatar,
  Box,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  Typography
} from '@mui/material';

//** icones
import {
  MdDashboard,
  MdMeetingRoom,
  MdDevicesOther,
  MdExitToApp
} from 'react-icons/md'

//** navegação
import { useNavigate } from 'react-router-dom';

//** estilos e assets
import Logo from '../../assets/logo.png'
import { style } from './style';


const links = [
  { item: 'Dashboard', icon: <MdDashboard size={22} />, link: "/" },
  { item: 'Salas', icon: <MdMeetingRoom size={22} />, link: "rooms" },
  { item: 'Dispositivos', icon: <MdDevicesOther size={22} />, link: "devices" },
  { item: 'Sair', icon: <MdExitToApp size={22} />, link: "#" }
]

function MenuHeader() {
  return (
    <Box sx={{ ...style.menuHeader }}>
      <Avatar src={Logo} variant="rounded" sx={{ ...style.avatar }} />
      <Typography mt={1.5} variant="h6">
        Empresa Test
      </Typography>
    </Box>
  )
}

export function MenuVertical() {
  const navigate = useNavigate();

  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{ ...style.container }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <MenuHeader />

        <Divider />

        <div>
          {links.map((element, index) => (
            <List key={index} sx={{ display: 'flex' }}>
              <ListItemButton onClick={() => navigate(element.link)}>
                <ListItemIcon>
                  {element.icon}
                </ListItemIcon>
                {element.item}
              </ListItemButton>
            </List>
          ))}
        </div>
      </Drawer>
    </Box>
  )
}