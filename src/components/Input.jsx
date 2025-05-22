export default function Input({label, type = 'text', required = true, property, setProperty, id}){
	let error = null
	const fieldValue = property[id]

	const updateDisplay = function(event){
		const newProperty = {...property, [id]: event.target.value}
		setProperty(newProperty)
	}

	if (!fieldValue && property.submitted){
		error = `You need to input your ${label} here`
	}

	return(
		<>
			<label htmlFor = {id}>{label}</label>
			<input type={type} id={id} required = {required} value = {fieldValue} onChange = {updateDisplay}/>
		{error && <p className= {id + '-error error'}>{error}</p>}
		</>
	)
}
