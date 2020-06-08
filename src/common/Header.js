import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../theme'

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar position="absolute" color="default" className={classes.appBar}>
			<Toolbar>
				<Typography variant="subtitle1" color="inherit">
					Shipping Label Maker
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
