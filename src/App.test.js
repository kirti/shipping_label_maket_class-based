import React from 'react'
import App from './App'
import { render , getByText ,queryByAttribute , fireEvent , cleanup  } from '@testing-library/react';


afterEach(cleanup)

it('renders Login Page', () => {
	const { getByText } = render(<App />)
	const linkElement = getByText(/Shipping Label Maker/i)
	expect(linkElement).toBeInTheDocument()
})

it('Render Sender Component when correct user and pwd  ', () => {
	const { container } = render(<App />);
	const getById = queryByAttribute.bind(null, 'id');
	const username = getById(container, "username");
	const password = getById(container, "password");
	const submitButton = getById(container, "login");
	expect(username.textContent).toBe("");
	expect(password.textContent).toBe("");

	const newName = "kirti";
	fireEvent.change(username, { target: { value: newName } });
	const newPwd = "shiva@3@456";
	fireEvent.change(password, { target: { value: newPwd } });
	fireEvent.click(submitButton)
	const { getByText } = render(<App />)
	const linkElement = getByText(/Enter the sender address/i)
	expect(linkElement).toBeInTheDocument()
  });


  it('Render Login page when incorrect user and pwd  ', () => {
	const { container } = render(<App />);
	const getById = queryByAttribute.bind(null, 'id');
	const username = getById(container, "username");
	const password = getById(container, "password");
	const submitButton = getById(container, "login");
	expect(username.textContent).toBe("");
	expect(password.textContent).toBe("");

	const newName = "kirti2";
	fireEvent.change(username, { target: { value: newName } });
	const newPwd = "shiva@3@456";
	fireEvent.change(password, { target: { value: newPwd } });
	fireEvent.click(submitButton)
	const { asFragment } = render(<App />)
	expect(asFragment(<App />)).toMatchSnapshot()
  });


  it('Render Complete App with all screen with Prev and Next ', async () => {

	const { container  } = render(<App />);
	const getById = queryByAttribute.bind(null, 'id');
	const username = getById(container, "username");
	const password = getById(container, "password");
	const submitButton = getById(container, "login");
	expect(username.textContent).toBe("");
	expect(password.textContent).toBe("");

	const newName = "kirti";
	fireEvent.change(username, { target: { value: newName } });
	const newPwd = "shiva@3@456";
	fireEvent.change(password, { target: { value: newPwd } });
	fireEvent.click(submitButton)
	const { getByText } = render(<App />)
	const linkElement = getByText(/Enter the sender address/i)
	expect(linkElement).toBeInTheDocument()


	const name = getById(container, "name");
	const street = getById(container, "street");
	const city = getById(container, "city");
	const state = getById(container, "state");
	const zip = getById(container, "zip");

	const nextButton = getById(container, "next");
	const prevButton = getById(container, "back");
	

	expect(name.textContent).toBe("");
	expect(street.textContent).toBe("");
	expect(city.textContent).toBe("");
	expect(state.textContent).toBe("");
	expect(zip.textContent).toBe("");
	expect(prevButton).toBeDisabled()

	const newSenderName = "kirti";
	fireEvent.change(name, { target: { value: newSenderName } });
	const newStreet = "toronto";
	fireEvent.change(street, { target: { value: newStreet } });
	fireEvent.click(nextButton)




	const linkElement2 = await getByText(/Enter Receiver's Address gghghghg/i)
	expect(linkElement2).toBeInTheDocument()
	expect(prevButton).not.toBeDisabled()

	const nameReceiver = getById(container, "name");
	const streetReceiver = getById(container, "street");
	const cityReceiver = getById(container, "city");
	const stateReceiver = getById(container, "state");
	const zipReceiver = getById(container, "zip");

	expect(nameReceiver.textContent).toBe("");
	expect(streetReceiver.textContent).toBe("");
	expect(cityReceiver.textContent).toBe("");
	expect(stateReceiver.textContent).toBe("");
	expect(zipReceiver.textContent).toBe("");

	const newNameReceiver = "shiva";
	fireEvent.change(nameReceiver, { target: { value: newNameReceiver } });


	fireEvent.click(nextButton)
	
	const weight = await getById(container, "weight");
	expect(weight.textContent).toBe("");
	const newWeight = "10";
	fireEvent.change(weight, { target: { value: newWeight } });

	const { getByText : weightScreen } = await render(<App />)
	const linkElementR = weightScreen(/Enter Weight fdfgg/i)
	expect(linkElementR).toBeInTheDocument()

	fireEvent.click(nextButton)

	
	const { getByLabelText } = await render(<App />);
	const shippingOption =  getByLabelText('Ground')
	fireEvent.click(shippingOption, { target: { value: "1" } });
	expect(shippingOption.value).toBe('1')
	

	const { getByText : shippingScreen } = await render(<App />)
	const linkElementW = shippingScreen(/Select Shipping Option/i)
	expect(linkElementW).toBeInTheDocument()

	fireEvent.click(nextButton)

 // Checking previous button from step4 
	fireEvent.click(prevButton)
	const { getByText : ShippingScreenExit } = await render(<App />)
	const confirmScreenExist = ShippingScreenExit(/Select Shipping Option/i)
	expect(confirmScreenExist).toBeInTheDocument()


	fireEvent.click(nextButton)
	const { getByText : confirmScreen } = await render(<App />)
	const linkElementConfirm = confirmScreen(/Sender Information/i)
	expect(linkElementConfirm).toBeInTheDocument()

	fireEvent.click(nextButton)
	const { getByText : finalScreen } = await render(<App />)
	const finalScreenElement = finalScreen(/unknown/i)
	expect(finalScreenElement).toBeInTheDocument()
  });


