
export default function Form({onSubmit,className, children}){
	
	const handleSubmit = function(event){
		event.preventDefault()
		onSubmit()
	}

	return(
		<form noValidate onSubmit = {handleSubmit} className = {className}>
		    { children }
		</form>
	)
}
