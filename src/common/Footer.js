import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { useStyles } from '../theme'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export default function Footer() {
	const classes = useStyles()

	return (
		<div>
			<CssBaseline />
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Typography variant="body1">Shipping Label Marker</Typography>
					<Copyright />
				</Container>
			</footer>
		</div>
	)
}
