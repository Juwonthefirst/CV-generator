import Input from './Input.jsx'
import Form from './Form.jsx'
import Add from './Add.jsx'
import { setFieldProperty } from '../helper.js'

export default function ProjectForm({projectDetail, setProjectDetail, addProjects}){
	const projectNameProperty = setFieldProperty("Project Name", "name",projectDetail, setProjectDetail)
	const projectStackProperty = setFieldProperty("Stack", "stack", projectDetail, setProjectDetail)
	const projectDescriptionProperty = setFieldProperty("Description", "description", projectDetail, setProjectDetail)
	const onsubmit = () => {                                           if(Object.values(projectDetail).some((value)=> value === '')){
		setProjectDetail({...projectDetail, submitted: true})
		return
		}
		addProjects((prev) => [...prev, {...projectDetail, id: crypto.randomUUID()}])
	}

	return(
		<Form className={"project-form"} onSubmit={onsubmit}>
		    <Input iconName={"project"} placeholder={"Enter your project name..."} {...projectNameProperty} />
		    <Input iconName={"stack"} placeholder={"Technologies you used e.g Node.."} {...projectStackProperty} />
		    <Input placeholder={"Describe your project"} {...projectDescriptionProperty} />
		    <Add />
		</Form>
	)
}
