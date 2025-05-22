
export default function Form({onSubmit, children}){
	
	const handleSubmit = function(event){
		event.preventDefault()
		onSubmit()
	}

	return(
		<form noValidate onSubmit = {handleSubmit}>
		    { children }
		</form>
	)
}
