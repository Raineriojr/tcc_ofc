import React from 'react';

import {
  Chip as MuiChip,
} from '@mui/material';

export function Chip(props: {status: true | false}) {
  return (
    <MuiChip 
      label={props.status ? 'ON' : 'OFF'} 
      style={{
        fontWeight: 'bold',
        fontSize: '0.75rem',
        backgroundColor: props.status ? '#00FA9A' : '#FF6347'
      }}
    />
  )
}