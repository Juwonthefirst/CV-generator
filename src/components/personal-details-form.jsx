import Input from './Input.jsx'
import Form from './Form.jsx'
import { setFieldProperty } from '../helper.js'

export default function PersonalDetailsForm({personalDetails, setPersonalDetails}){
	const firstNameProperty = setFieldProperty("First name", "firstname", personalDetails, setPersonalDetails)
	const lastNameProperty = setFieldProperty("Last name", "lastname", personalDetails, setPersonalDetails)
	const emailProperty = setFieldProperty("Email", "email", personalDetails, setPersonalDetails)
	const phoneProperty = setFieldProperty("Phone number", "phone", personalDetails, setPersonalDetails)
	const locationProperty = setFieldProperty("State/City", "area", personalDetails, setPersonalDetails)
	
	return(
		<Form className= {"personal-details-form"}>
		    <Input placeholder={"Enter your first name here..."} {...firstNameProperty}/>
		    <Input placeholder={"Enter your last name here..."} {...lastNameProperty}/>
		    <Input type = {'email'} placeholder={"likethis@gmail.com"} {...emailProperty} />
		    <Input placeholder={"Enter yourphone number here...."} type = {'number'} {...phoneProperty} />
		    <Input placeholder={"Where do you live"} {...locationProperty}/>
		</Form>
	)
}
