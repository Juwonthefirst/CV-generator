import Input from './Input.jsx'
import Form from './Form.jsx'

export default function PersonalDetailsForm({personalDetails, setPersonalDetails}){
	return(
		<Form>
		    <Input label = {"First name"} property = {personalDetails} setProperty = {setPersonalDetails} id = {"firstname"}/>
		    <Input label = {"Last name"} property = {personalDetails} setProperty = {setPersonalDetails} id = {"lastname"}/>
		    <Input type = {'email'} label={'Email'} property = {personalDetails} setProperty = {setPersonalDetails} id = {"email"} />
		    <Input type = {'number'} label = {"Phone number"} property = {personalDetails} setProperty = {setPersonalDetails} id = {"phone"} />
		    <Input label = {"State/City"} property = {personalDetails} setProperty = {setPersonalDetails} id = {"location"} />
		</Form>
	)
}
