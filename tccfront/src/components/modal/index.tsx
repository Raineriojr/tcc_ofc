import React from 'react';

// **componentes
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

// ** types
interface Props {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  component: React.ReactNode
}

export function Modal(props: Props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
    >
      <DialogTitle>
        {props.title}
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', width: '30rem' }}>
        {props.component}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose} autoFocus>
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}