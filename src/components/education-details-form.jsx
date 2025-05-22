import Input from './Input.jsx'
import Form from './Form.jsx'
import { setFieldProperty } from '../helper.js'

export default function EducationForm({educationDetails, setEducationDetails, addEducation}){
	const degreeProperty = setFieldProperty("Degree", "degree", educationDetails, setEducationDetails)
	const schoolProperty = setFieldProperty("School", "school", educationDetails, setEducationDetails)
	const cityProperty = setFieldProperty("City", "city", educationDetails, setEducationDetails)
	const countryProperty = setFieldProperty("Country", "country", educationDetails, setEducationDetails)
	const startDateProperty = setFieldProperty("Start date", "start-date", educationDetails, setEducationDetails)
	const endDateProperty = setFieldProperty("End date", "end-date", educationDetails, setEducationDetails)
	const onsubmit = () => {
		if(educationDetails.values.some((value)=> {value === ''})){
			setEducationDetails({...educationDetails, submitted: true})
			return
		}
		addEducation((prev) => [...prev, educationDetails])
		
	}

	return(
	<Form className = {'education-detail-form'} onSubmit = {onsubmit}>
		<Input placeholder ={'Enter Your degree here'} {...degreeProperty} />
		<Input placeholder = {'Enter the school where you recieved your degree'} {...schoolProperty} />
		<Input placeholder = {'Enter your school\'s city'} {...cityProperty}/>
		<Input placeholder = {'Enter your school\'s country'} {...countryProperty} />
		<div className = {"education-span"}>
		    <Input type = {"date"} {...startDateProperty} />
		    <Input type = {"date"} {...endDateProperty} />
		</div>
		<Input type = {"submit"} value = {"add"} />
	</Form>
)
}
