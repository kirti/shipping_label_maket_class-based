import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function StepHubProgressBar({ activeStep, steps, classes }) {
	const matches = useMediaQuery('(max-width:600px)')
	return (
		<>
			<ProcessStepHubProgressBar activeStep={activeStep} steps={steps} classes={classes} matches={matches} />
		</>
	)
}

export function ProcessStepHubProgressBar({ activeStep, steps, classes, matches }) {
	if (activeStep === steps.length) {
		return (
			<>
				<Typography variant="h5" gutterBottom>
					Thank you for your order.
				</Typography>
				<Typography variant="subtitle1">
					Your order number is #2001539. We will send you an update when your order has shipped.
				</Typography>
			</>
		)
	} else {
		/* added condition layout of stepper as per responsiveness */
		let orientationClass = 'horizontal'
		if (matches) {
			orientationClass = 'vertical'
		}
		return (
			<Stepper activeStep={activeStep} className={classes.stepper} orientation={orientationClass}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		)
	}
}

export default StepHubProgressBar
