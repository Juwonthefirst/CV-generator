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
		    <Input placeholder={"Enter your first name here..."} iconName={"user"} {...firstNameProperty}/>
		    <Input placeholder={"Enter your last name here..."} iconName={"user"} {...lastNameProperty}/>
		    <Input type = {'email'} iconName={"mail"} placeholder={"likethis@gmail.com"} {...emailProperty} />
		    <Input iconName={"phone"} placeholder={"Enter yourphone number here...."} type = {'number'} {...phoneProperty} />
		    <Input iconName={"map"} placeholder={"Where do you live"} {...locationProperty}/>
		</Form>
	)
}
