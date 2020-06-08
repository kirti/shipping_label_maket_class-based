import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../theme'

function SignIn({ onHandleLogin, authError }) {
	const classes = useStyles()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const onClick = e => {
		e.preventDefault()
		onHandleLogin(e.currentTarget.id, username, password)
	}

	const ErrorMessage = ({ authError, classes }) => {
		if (authError) {
			return <div className={classes.error}>Please enter valid username and password</div>
		}
		return <></>
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>

					<Typography component="h1" variant="h5">
						<ErrorMessage authError={authError} classes={classes} />
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth={true}
							id="username"
							label="Username"
							name="username"
							value={username}
							autoComplete="username"
							onChange={event => setUsername(event.target.value)}
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							value={password}
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={event => setPassword(event.target.value)}
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button
							type="submit"
							id="login"
							fullWidth
							variant="contained"
							color="primary"
							onClick={onClick}
							className={classes.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	)
}

export default SignIn
