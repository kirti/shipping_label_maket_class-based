export function getShippingOption(shippingOption) {
	return shippingOption === '1' ? 'Ground' : 'Priority'
}

export function getShippingCost(weight, shippingOption) {
	const shippingRate = 0.4
	return (Number(weight) * shippingRate * (shippingOption === '1' ? 1 : 1.5)).toFixed(2)
}

export const ShippingOption = {
	ground: '1',
	priority: '2',
}

export const convertWeightToInt = weight => {
	let useWeight
	try {
		useWeight = parseInt(weight)

		if (Number.isNaN(weight)) {
			useWeight = 0
		}
	} catch (error) {
		useWeight = 0
	}
	return useWeight
}

/* was doing validation but seems like longer task so leaving it in between */
export const getStepWidgetContext = (wizardContext, activeStep) => {
	const { from, to, weight, shippingOption } = wizardContext

	switch (activeStep) {
		case 0:
			const { name, street, city, state, zip } = from
			if (name !== '' && street !== '' && city !== '' && state !== '' && zip !== '') {
				return true
			}
			return false
		case 1:
			const { name: nameTo, street: streetTo, city: cityTo, state: stateTo, zip: zipTo } = to
			if (nameTo !== '' && streetTo !== '' && cityTo !== '' && stateTo !== '' && zipTo !== '') {
				return true
			}
			return false
		case 2:
			if (weight > 0) {
				return true
			}
			return false
		case 3:
			if (shippingOption !== '') {
				return true
			}
			return false
		case 4:
			return true
		default:
			console.error('Error in getStepWidgetContext activestep not exist', activeStep)
	}
}
