import { useState } from 'react'
import PersonalDetailsForm from './components/personal-details-form.jsx'
import EducationExperienceForm from './components/education-details-form.jsx'
import WorkExperienceForm from './components/work-experience-form.jsx'

export default function App(){
	const [personalDetails, setPersonalDetails] = useState({firstname: '', lastname: '', email: '', phone: '', area: '', submitted: false})
	const [educationDetails, setEducationDetails] = useState({degree: '', school: '', city: '', country: '', submitted: false})
	const [educationExperience, addEducationExperience]= useState([])
	const [workExperience, setWorkExperience] = useState({jobTitle: '', company: '', startDate: '', endDate: '', extra: '', submitted: false})
	const [allWorkExperience, addAllWorkExperience] = useState([])

	return(
	<>
	<PersonalDetailsForm personalDetails = {personalDetails} setPersonalDetails = {setPersonalDetails}/>
	<EducationExperienceForm educationDetails={educationDetails} setEducationDetails={setEducationDetails} addEducation={addEducationExperience}/>

	<WorkExperienceForm workExperience={workExperience} setWorkExperience={setWorkExperience} addWorkExperience={addAllWorkExperience}/>

	</>
	)
}
