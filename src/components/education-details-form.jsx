import Input from './Input.jsx'
import Form from './Form.jsx'
import { setFieldProperty } from '../helper.js'

export default function EducationForm({educationDetails, setEducationDetails, addEducation}){
	const degreeProperty = setFieldProperty("Degree", "degree", educationDetails, setEducationDetails)
	const schoolProperty = setFieldProperty("School", "school", educationDetails, setEducationDetails)
	const cityProperty = setFieldProperty("City", "city", educationDetails, setEducationDetails)
	const countryProperty = setFieldProperty("Country", "country", educationDetails, setEducationDetails)
	const startDateProperty = setFieldProperty("Start date", "startDate", educationDetails, setEducationDetails)
	const endDateProperty = setFieldProperty("End date", "endDate", educationDetails, setEducationDetails)
	const onsubmit = () => {
		if(educationDetails.values.some((value)=> {value === ''})){
			setEducationDetails({...educationDetails, submitted: true})
			return
		}
		addEducation((prev) => [...prev, educationDetails])
		
	}

	return(
	<Form className = {'education-detail-form'} onSubmit = {onsubmit}>
		<Input iconName={"degree"} placeholder ={'Enter Your degree here'} {...degreeProperty} />
		<Input iconName={"school"} placeholder = {'Enter the school where you recieved your degree'} {...schoolProperty} />
		<Input iconName={"map"} placeholder = {'Enter your school\'s city'} {...cityProperty}/>
		<Input iconName={"map"} placeholder = {'Enter your school\'s country'} {...countryProperty} />
		<div className = {"education-span"}>
		    <Input iconName={"calendar"} type = {"date"} {...startDateProperty} />
		    <Input iconName={"calendar"} type = {"date"} {...endDateProperty} />
		</div>
		<Input iconName={"add"} type = {"submit"} value = {"add"} />
	</Form>
)
}
