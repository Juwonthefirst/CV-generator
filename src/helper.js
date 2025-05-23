
export function setFieldProperty(label, id, formProperty, setFormProperty){
	const value = formProperty[id]
	const onChange = (event) => {setFormProperty({...formProperty, [id]: event.target.value})}
	const error = (formProperty.submitted && !value.trim())? `You need to enter your ${label} here` : null
	return {label, id, value, onChange, error}
}
