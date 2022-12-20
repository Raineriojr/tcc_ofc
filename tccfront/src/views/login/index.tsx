import React from 'react'
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { Loading } from '../../components/loading';
import { style } from './style';

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/', { replace: true })
    }, 2000)
  }

  return (<>
    <Loading open={loading} title="Carregando ..."/>
    <Grid container sx={{ ...style.container }} >

      <Grid item md={4}>
        <Paper sx={{ ...style.paper }}>
          <Typography variant='h5' mb={2}>
            LOGIN
          </Typography>

          <TextField
            fullWidth
            label="Email"
            placeholder='email@email.com'
            margin='dense'
            value="admin@email.com"
          />

          <TextField
            fullWidth
            label="Senha"
            placeholder='*********'
            type='password'
            margin='dense'
            value="12345"
          />

          <Button
            fullWidth
            onClick={handleSubmit}
            variant='contained'
            sx={{ mt: 1 }}
          >
            Entrar
          </Button>

          <Typography variant="subtitle2" mt={5}>
            Tcc Engenharia 2022
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </>)
}