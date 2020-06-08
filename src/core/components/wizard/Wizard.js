import React from 'react'
import PropTypes from 'prop-types'
import { WizardAction } from './wizard-action'

function Wizard(WizardComponent) {
	class _Wizard extends React.PureComponent {
		constructor(props) {
			super(props)
			this.state = {
				wizardContext: props.wizardContext,
				activeStep: 0,
				steps: props.steps,
			}
		}

		onNext = () => {
			const { activeStep } = this.state
			this.setState({
				activeStep: activeStep + 1,
			})
		}

		onPrev = () => {
			const { activeStep } = this.state
			this.setState({
				activeStep: activeStep - 1,
			})
		}

		onAction = action => {
			const { onComplete } = this.props

			switch (action) {
				case WizardAction.prev:
					this.onPrev()
					break
				case WizardAction.next:
					this.onNext()
					break
				case WizardAction.end:
					onComplete()
					break
				default:
					console.error('Widget Action not Exist', action)
			}
		}

		render() {
			const { onUpdateShippingLblMarket, header: Header, wizardContext } = this.props
			return (
				<>
					<Header />
					<WizardComponent
						onAction={this.onAction}
						wizardContext={wizardContext}
						activeStep={this.state.activeStep}
						onUpdateShippingLblMarket={onUpdateShippingLblMarket}
						{...this.props}
					/>
				</>
			)
		}
	}
	_Wizard.propTypes = {
		header: PropTypes.func.isRequired,
		steps: PropTypes.array.isRequired,
		wizardContext: PropTypes.object.isRequired,
		onComplete: PropTypes.func.isRequired,
	}
	return _Wizard
}

Wizard.propTypes = {
	WizardComponent: PropTypes.element,
}

export default Wizard
