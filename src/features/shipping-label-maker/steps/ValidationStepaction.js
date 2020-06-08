import React, { useState, useEffect, useCallback, useRef } from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from '../../../theme'
import Typography from '@material-ui/core/Typography'
import { WizardAction } from '../../../core/components/wizard/wizard-action'
import { getStepWidgetContext } from '../../../utils/shippingLabelMarker'

function StepHubActionButton({ activeStep, steps, onHandleStepAction, wizardContext }) {
	const [taskFormValid, setTaskFormValid] = useState('')
	const classes = useStyles()
	const firstRender = useRef(true)

	const onHandleNext = useCallback(
		e => {
			e.preventDefault()

			console.log('handle onHandleNext click ')
			console.log(firstRender.current, 'firstRender.current')

			if (taskFormValid) {
				firstRender.current = true
				if (e.currentTarget.id === 'end') {
					onHandleStepAction(WizardAction.end)
				}

				onHandleStepAction(WizardAction.next)
			}
		},
		[taskFormValid, onHandleStepAction]
	)

	const isFormValid = useCallback((wizardContext, activeStep) => {
		const useFormvalid = getStepWidgetContext(wizardContext, activeStep)
		setTaskFormValid(useFormvalid)
	}, [])

	useEffect(() => {
		console.log('handle effect click ')
		console.log(firstRender.current, 'firstRender.current')
		if (firstRender.current) {
			firstRender.current = false
			return
		}
		isFormValid(wizardContext, activeStep)
	}, [wizardContext, activeStep, isFormValid])

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
				taskFormValid={taskFormValid}
			/>
		</div>
	)
}

const ErrorMessage = ({ taskFormValid, classes }) => {
	if (!taskFormValid && taskFormValid !== '') {
		return <div className={classes.error}>all fields are required</div>
	}
	return <></>
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
	taskFormValid,
}) {
	console.log(taskFormValid, 'taskFormValidtaskFormValid')
	if (activeStep !== steps.length) {
		return (
			<div className={classes.button}>
				<Typography component="h1" variant="h5">
					<ErrorMessage taskFormValid={taskFormValid} classes={classes} />
				</Typography>

				<Button disabled={activeStep === 0} id={'back'} onClick={onHandleBack} className={classes.backButton}>
					{prevBtnLabel}
				</Button>
				<Button
					variant="contained"
					disabled={taskFormValid === false || taskFormValid === ''}
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
