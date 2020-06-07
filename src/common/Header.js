import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4" color="inherit">
					Shipping Label Maker
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
