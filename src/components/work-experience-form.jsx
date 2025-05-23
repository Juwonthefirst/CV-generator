import Input from './Input.jsx'
import Form from './Form.jsx'
import Add from './Add.jsx'
import { setFieldProperty } from '../helper.js'

export default function WorkExperienceForm({workExperience, setWorkExperience, addWorkExperience}){
	const jobTitleProperty = setFieldProperty("Job Title", "jobTitle", workExperience, setWorkExperience)
	const companyProperty = setFieldProperty("Company", "company", workExperience, setWorkExperience)
	const startDateProperty = setFieldProperty(
		"Start date", "startDate", workExperience, setWorkExperience)
	const endDateProperty = setFieldProperty("End date", "endDate", workExperience, setWorkExperience)
	const descriptionProperty = setFieldProperty("Description", "extra", workExperience, setWorkExperience)

	const onsubmit = () => {
		if(Object.values(workExperience).some((value)=> value === '')){
			setWorkExperience({...workExperience, submitted: true})
			return
		}
		addWorkExperience((prev) => [...prev, workExperience])
	}

	return(
		<Form className={"work-experience-form"} onSubmit={onsubmit}>
		    <Input iconName={"buisness"} placeholder={"Enter your previous Job title"} {...jobTitleProperty} />
		    <Input iconName={"company"} placeholder={"Enter your previous company"} {...companyProperty} />
		    <div className = {"work-span"}>               
			<Input iconName={"calendar"} type = {"date"} {...startDateProperty} />
			<Input iconName={"calendar"} type = {"date"} {...endDateProperty} />
		    </div>
		    <Input placeholder={"Describe your experience in your previous place of work"} {...descriptionProperty} />
		    <Add />
		</Form>
	)
}
	
