import React from "react";

// ** components
import {
  Typography,
  Backdrop
} from '@mui/material';

// ** lottie
import Lottie from 'lottie-react';
import LoadingLottie from '../../assets/lottie/loading.json';

// ** styles
import { style } from './style';

interface LoadingProps {
  open: boolean,
  title?: string
}

export function Loading(props: LoadingProps) {
  return (
    <Backdrop
      open={props.open}
      style={{
        backgroundColor: '#15181FAA',
        zIndex: 999999,
      }}
    >
      <Lottie
        animationData={LoadingLottie}
        autoplay
        loop
        style={{ width: '38rem', height: '38rem' }}
      />

      <Typography
        variant="button"
        sx={{ ...style.typography }}
      >
        {props.title}
      </Typography>
    </Backdrop>
  )
}