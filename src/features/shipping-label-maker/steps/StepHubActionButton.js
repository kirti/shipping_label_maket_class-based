import React from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from '../../../theme'
import { WizardAction } from '../../../core/components/wizard/wizard-action'

function StepHubActionButton({ activeStep, steps, onHandleStepAction, wizardContext }) {
	const classes = useStyles()

	const onHandleNext = e => {
		e.preventDefault()

		if (e.currentTarget.id === 'end') {
			onHandleStepAction(WizardAction.end)
		}

		onHandleStepAction(WizardAction.next)
	}

	const onHandleBack = e => {
		e.preventDefault()
		onHandleStepAction(WizardAction.prev)
	}

	return (
		<div className={classes.instructions}>
			<ProcessStepHubActionButton
				activeStep={activeStep}
				steps={steps}
				classes={classes}
				onHandleNext={onHandleNext}
				onHandleBack={onHandleBack}
				prevBtnLabel={'BACK'}
				nextBtnLabel={'NEXT'}
				confirmBtnLabel={'CONFIRM AND SUBMIT'}
			/>
		</div>
	)
}

export function ProcessStepHubActionButton({
	activeStep,
	steps,
	classes,
	onHandleNext,
	onHandleBack,
	prevBtnLabel,
	nextBtnLabel,
	confirmBtnLabel,
}) {
	if (activeStep !== steps.length) {
		return (
			<div className={classes.button}>
				<Button disabled={activeStep === 0} id={'back'} onClick={onHandleBack} className={classes.backButton}>
					{prevBtnLabel}
				</Button>
				<Button
					variant="contained"
					id={activeStep === steps.length - 1 ? 'end' : 'next'}
					color="primary"
					onClick={onHandleNext}
				>
					{activeStep === steps.length - 1 ? confirmBtnLabel : nextBtnLabel}
				</Button>
			</div>
		)
	}

	return <></>
}

export default StepHubActionButton
