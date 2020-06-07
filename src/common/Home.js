import React  from 'react'
import Header from './Header'
import Footer from './Footer'
import ShippingLabelMarker from '../features/shipping-label-maker/ShippingLabelMarker'
import Authentication  from '../core/components/auth/Authentication';

const AuthorizedShippingLabelMarker = Authentication(ShippingLabelMarker)

const Home = () => {
	return (
		<>
			<Header />
			 <AuthorizedShippingLabelMarker/>
			<Footer />
		</>
	)
}

export default Home


