import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../../theme'

function StepHubActionButton({ activeStep, steps, onAction }) {
	const classes = useStyles()

	const onHandleNext = e => {
		e.preventDefault()
		onAction(e.currentTarget.id)
	}

	const onHandleBack = e => {
		e.preventDefault()
		onAction(e.currentTarget.id)
	}

	return (
		<div className={classes.instructions}>
			{activeStep === steps.length ? (
				<div>
					<Typography className={classes.instructions}>All steps completed</Typography>
				</div>
			) : (
				<div>
					<Button
						disabled={activeStep === 0}
						id={'back'}
						onClick={onHandleBack}
						className={classes.backButton}
					>
						Back
					</Button>
					<Button variant="contained" id={'next'} color="primary" onClick={onHandleNext}>
						{activeStep === steps.length - 1 ? 'Confirm and Submit' : 'Next'}
					</Button>
				</div>
			)}
		</div>
	)
}

export default StepHubActionButton
