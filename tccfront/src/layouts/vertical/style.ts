import { SxProps } from "@mui/material";
import colors from '../../styles/colors.json';

interface propStyles {
  container: SxProps
	menuHeader: SxProps
	avatar: SxProps
}

const drawerWidth = 210;

export const style: propStyles = {
	container: {
		width: drawerWidth,
		flexShrink: 0,
		[`& .MuiDrawer-paper`]: { 
			width: drawerWidth, 
			boxSizing: 'border-box', 
		},
	},

	menuHeader:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		p: '1.5rem',
	},

	avatar:{
		height: '4rem',
		width: '9rem'
	}
}