import React , { useState } from "react"
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { useStyles } from '../theme'
import Typography from '@material-ui/core/Typography'

function SignIn({ onHandleLogin }) {
	const classes = useStyles()
	const [username , setUsername] = useState('')
	const [password , setPassword] = useState('')


	const onClick = e => {
		e.preventDefault()
		onHandleLogin(e.currentTarget.id,username,password)
	}

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography label={'signin'} />
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth={true}
						id="username"
						label="username"
						name="username"
						value={username}
						autoComplete="username"
						onChange={(event) => setUsername(event.target.value)}
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
						onChange={(event) => setPassword(event.target.value)}
					/>
					

				 <Button type="submit" id="login" fullWidth variant="contained" color="primary" onClick={onClick} className={classes.submit}>
					  Sign In
		         </Button>
			
			</div>
		</Container>


					
					
			
	)
}

export default SignIn
