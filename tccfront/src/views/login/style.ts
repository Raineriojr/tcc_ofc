import { SxProps } from "@mui/material";
import { height } from '../../utils/constants';

interface propStyles {
  container: SxProps
  paper: SxProps
  form: SxProps
}

export const style: propStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    p: '2rem',
    backgroundColor: '#ECECEC'
  },

  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    p: '2rem',
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
}