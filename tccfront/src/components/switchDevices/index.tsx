import React from 'react';
import {
  Box,
  Switch
} from '@mui/material';
import { Chip } from '../chip';

import { style } from './style';
import { api } from '../../services/services';

interface Props {
  status?: boolean
}

export function SwitchDevices(props: Props) {
  const [on, setOn] = React.useState(false)

  const handleSwitch = () => {
    setOn((prev: any) => !prev)
    if(props.status){
      toggleDevice(on ? "off" : "on")
    }
  }

  const toggleDevice = async (state?: string) => {
    try {
      const response = await api.post('/sonoff', {
        state: state
      });
      console.log('response state:', response)
      return response.data.switch;
    } catch (error) {
      console.log(error)
      return error
    }
  }

  return (
    <Box sx={{ ...style.actionContainer }}>
      <Switch
        onChange={handleSwitch}
        checked={on}
      />
      <Chip status={on} />
    </Box>
  )
}