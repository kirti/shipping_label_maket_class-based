import React from 'react'
import StepHubActionButton from './StepHubActionButton'
import Container from '@material-ui/core/Container'
import TaskReceiverAddress from './TaskReceiverAddress'
import TaskSenderAddress from './TaskSenderAddress'
import TaskShippingOption from './TaskShippingOption'
import TaskConfirm from './TaskConfirm'
import TaskWeight from './TaskWeight'
import { ShippingLabel } from '../ShippingLabel'

export default class TaskHub extends React.Component {
	render() {
		const {
			steps,
			activeStep,
			onHandleStepAction,
			wizardContext,
			onUpdateShippingLblMarket,
			classes,
		} = this.props

		const Task = getCurrentTask(activeStep, steps, wizardContext, onUpdateShippingLblMarket, classes)

		return (
			<>
				<Container component="main" maxWidth="xs">
					<form className={classes.form} noValidate>
						{Task}
						<StepHubActionButton
							onHandleStepAction={onHandleStepAction}
							activeStep={activeStep}
							steps={steps}
							wizardContext={wizardContext}
						/>
					</form>
				</Container>
			</>
		)
	}
}

function getCurrentTask(activeStep, steps, wizardContext, onUpdateShippingLblMarket, classes) {
	switch (activeStep) {
		case 0:
			return (
				<TaskSenderAddress
					wizardContext={wizardContext}
					onUpdateShippingLblMarket={onUpdateShippingLblMarket}
				/>
			)

		case 1:
			return (
				<TaskReceiverAddress
					wizardContext={wizardContext}
					onUpdateShippingLblMarket={onUpdateShippingLblMarket}
				/>
			)

		case 2:
			return (
				<TaskWeight wizardContext={wizardContext} onUpdateShippingLblMarket={onUpdateShippingLblMarket} />
			)

		case 3:
			return (
				<TaskShippingOption
					wizardContext={wizardContext}
					onUpdateShippingLblMarket={onUpdateShippingLblMarket}
				/>
			)

		case 4:
			return <TaskConfirm wizardContext={wizardContext} classes={classes} />

		default:
			if (activeStep === steps.length) {
				return <ShippingLabel wizardContext={wizardContext} classes={classes} />
			}
			return 'Unknown Task of Step'
	}
}
