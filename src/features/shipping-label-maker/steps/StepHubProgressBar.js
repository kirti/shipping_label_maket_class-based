import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

function StepHubProgressBar({ activeStep, steps }) {
	return (
		<>
			<Stepper activeStep={activeStep}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</>
	)
}

export default StepHubProgressBar
