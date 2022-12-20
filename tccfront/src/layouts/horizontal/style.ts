import { SxProps } from "@mui/material";
import { height } from '../../utils/constants';
import colors from '../../styles/colors.json';

interface propStyles {
  content: SxProps
}

export const style: propStyles = {
  content: {
    flex: 1, 
    px: 3,
    flexGrow: 1,
    bgcolor: colors.background, 
    minHeight: height
  }
}