import { SxProps } from "@mui/material";
import colors from '../../styles/colors.json';

interface propStyles {
  actionContainer: SxProps
}

export const style: propStyles = {
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
  }
}