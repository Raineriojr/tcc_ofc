import { SxProps } from "@mui/material";
import colors from '../../styles/colors.json';

interface propStyles {
  topCard: SxProps
  titleCard: SxProps
  addButton: SxProps
}

export const style: propStyles = {
  topCard: {
    px: 4,
    py: 1,
    mb: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
  },

  titleCard: {
    fontWeight: 'bold',
    fontSize: '1rem'
  },

  addButton: {
    m: 4,
    border: "none",
    borderRadius: 50,
    backgroundColor: '#ECECEC'
  }
}