import React from 'react'
import StepHubActionButton from './StepHubActionButton'
import Container from '@material-ui/core/Container'
import { TaskReceiverAddress } from './TaskReceiverAddress'
import { TaskSenderAddress } from './TaskSenderAddress'
import { TaskShippingOption } from './TaskShippingOption'
import { TaskConfirm } from './TaskConfirm'
import { TaskWeight } from './TaskWeight'

class TaskHub extends React.Component {
	render() {
		const { steps, activeStep, onHandleStepAction, wizardContext, onUpdateShippingInfo } = this.props
		const Task = getCurrentTask(activeStep, wizardContext, onUpdateShippingInfo)
		return (
			<>
				<Container component="main" maxWidth="xs">
					<form>
						{Task}
						<StepHubActionButton onAction={onHandleStepAction} activeStep={activeStep} steps={steps} />
					</form>
				</Container>
			</>
		)
	}
}

export default TaskHub

function getCurrentTask(stepIndex, wizardContext, onUpdateShippingInfo) {
	switch (stepIndex) {
		case 0:
			return <TaskSenderAddress wizardContext={wizardContext} onUpdateShippingInfo={onUpdateShippingInfo} />

		case 1:
			return <TaskReceiverAddress wizardContext={wizardContext} onUpdateShippingInfo={onUpdateShippingInfo} />

		case 2:
			return <TaskWeight wizardContext={wizardContext} onUpdateShippingInfo={onUpdateShippingInfo} />

		case 3:
			return <TaskShippingOption wizardContext={wizardContext} onUpdateShippingInfo={onUpdateShippingInfo} />

		case 4:
			return <TaskConfirm wizardContext={wizardContext} />
		default:
			return 'Unknown step'
	}
}
