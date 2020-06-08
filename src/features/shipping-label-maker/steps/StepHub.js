import React from 'react'
import StepHubProgressBar from './StepHubProgressBar'
import TaskHub from './TaskHub'
import PropTypes from 'prop-types'

class StepHub extends React.Component {
	onHandleStepAction = action => {
		this.props.onAction(action)
	}

	render() {
		const { steps, activeStep, wizardContext, onUpdateShippingLblMarket, classes } = this.props

		return (
			<>
				<StepHubProgressBar steps={steps} activeStep={activeStep} classes={classes} />
				<TaskHub
					wizardContext={wizardContext}
					onHandleStepAction={this.onHandleStepAction}
					steps={steps}
					activeStep={activeStep}
					onUpdateShippingLblMarket={onUpdateShippingLblMarket}
					classes={classes}
				/>
			</>
		)
	}
}

StepHub.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired,
	steps: PropTypes.array.isRequired,
}

export default StepHub
