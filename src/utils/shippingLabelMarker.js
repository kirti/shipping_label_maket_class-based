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
