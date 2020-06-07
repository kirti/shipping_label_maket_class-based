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


  it('Stephub page ', async () => {
	const { container } = render(<App />);
	const getById = queryByAttribute.bind(null, 'id');
	const getBylabel = queryByAttribute.bind(null, 'label');
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
	const linkElement2 = getByText(/Enter Receiver's Address gghghghg/i)
	expect(linkElement2).toBeInTheDocument()
	expect(prevButton).not.toBeDisabled()
	fireEvent.click(nextButton)
	
	const weight = await getById(container, "weight");
	expect(weight.textContent).toBe("");
	const newWeight = "10";
	fireEvent.change(weight, { target: { value: newWeight } });

	const { getByText : weightScreen } = await render(<App />)
	const linkElementR = weightScreen(/Enter Weight fdfgg/i)
	expect(linkElementR).toBeInTheDocument()

	fireEvent.click(nextButton)

	

	/*const shippingOption = await getById(container, "shippingOption");
	expect(shippingOption[0].textContent).toBe("1");
	const newShipping = "10";
	fireEvent.change(shippingOption, { target: { value: newShipping } });*/


	const { getByText : shippingScreen } = await render(<App />)
	const linkElementW = shippingScreen(/Select Shipping Option/i)
	expect(linkElementW).toBeInTheDocument()

	fireEvent.click(nextButton)

	const { getByText : confirmScreen } = await render(<App />)
	const linkElementConfirm = confirmScreen(/Sender Information/i)
	expect(linkElementConfirm).toBeInTheDocument()


	
	

  });


