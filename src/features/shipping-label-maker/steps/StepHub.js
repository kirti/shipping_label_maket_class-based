import React from 'react'
import StepHubProgressBar from './StepHubProgressBar'
import TaskHub from './TaskHub'

class StepHub extends React.Component {
	onHandleStepAction = action => {
		switch (action) {
			case 'next':
				this.props.onNextBtn()
				break
			case 'back':
				this.props.onBackBtn()
				break

			default:
				console.error('action not exist Stephub', action)
		}
	}

	render() {
		const { steps, activeStep, wizardContext, onUpdateShippingInfo } = this.props

		return (
			<>
				<StepHubProgressBar steps={steps} activeStep={activeStep} />
				<TaskHub
					wizardContext={wizardContext}
					onHandleStepAction={this.onHandleStepAction}
					steps={steps}
					activeStep={activeStep}
					onUpdateShippingInfo={onUpdateShippingInfo}
				/>
			</>
		)
	}
}

export default StepHub
