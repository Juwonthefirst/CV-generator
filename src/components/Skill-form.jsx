import Input from './Input.jsx'
import Add from './Add.jsx'
import Form from './Form.jsx'
import { setFieldProperty } from '../helper.js'

export default function SkillForm({skill, setSkill, addSkillSet}){
	const skillProperty = setFieldProperty("Skills", "skill", skill, setSkill)
	const onsubmit = () => {
		if(skill.skill === ''){
			setSkill({...skill, submitted: true})
			return
		}
		addSkillSet((prev)=>[...prev, {...skill, id: crypto.randomUUID}])
	}

	return (
		<Form className={"skill-form"} onSubmit={onsubmit}>
		<Input iconName={"skill"} placeholder={"Enter "} {...skillProperty}/>
		<Add />
		</Form>
	)
}
