import React from "react";
import {
  Box,
  Toolbar
} from '@mui/material';

import {
  Outlet
} from 'react-router-dom';

import { MenuVertical } from "../vertical";
import { style } from './style';

export function Horizontal() {
  return (
    <Box sx={{display: 'flex'}}>
      <MenuVertical />
      <Box sx={{ ...style.content }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}