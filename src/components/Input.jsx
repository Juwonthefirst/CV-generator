export default function Input({label, type = 'text', required = true, value, onChange, id, error, placeholder}){

	return(
		<div className = {id + ' field'}>
			<label htmlFor = {id}>{label}</label>
			<input type={type} id={id} required = {required} value = {value} onChange = {onChange} placeholder={placeholder}/>
			<p className= {id + '-error error'}>{error}</p>
		</div>
	)
}
