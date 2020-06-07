import React from 'react'
import PropTypes from 'prop-types'

function Wizard(WizardComponent) {
	return class extends React.PureComponent {
		constructor(props) {
			super(props)
			this.state = {
				wizardContext: props.wizardContext,
				activeStep: 0,
				steps: props.steps,
			}
		}

		handleNextStep = () => {
			const { activeStep } = this.state
			this.setState({
				activeStep: activeStep + 1,
			})
		}

		handlePreviousStep = () => {
			const { activeStep } = this.state
			this.setState({
				activeStep: activeStep - 1,
			})
		}

		handleConfirm = () => {
			console.log('handleConfirm')
		}

		render() {
			const { onUpdateShippingInfo } = this.props
			return (
				<>
					<WizardComponent
						onBackBtn={this.handlePreviousStep}
						onNextBtn={this.handleNextStep}
						onConfirmBtn={this.handleConfirm}
						wizardContext={this.state.wizardContext}
						activeStep={this.state.activeStep}
						onUpdateShippingInfo={onUpdateShippingInfo}
						{...this.props}
					/>
				</>
			)
		}
	}
}

Wizard.propTypes = {
	steps: PropTypes.array.isRequired,
	wizardContext: PropTypes.object.isRequired,
}

export default Wizard
