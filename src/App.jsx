import { useState } from 'react'
import PersonalDetailsForm from './components/personal-details-form.jsx'

export default function App(){
	const [personalDetails, setPersonalDetails] = useState({firstname: '', lastname: '', email: '', phone: '', area: '', submitted: false})
	return(
	<PersonalDetailsForm personalDetails = {personalDetails} setPersonalDetails = {setPersonalDetails}/>
	)
}
