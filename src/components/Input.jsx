import Icon from './Icons.jsx'

export default function Input({label, type = 'text', required = true, value, onChange, id, error, placeholder, iconName}){

	return(
		<div className = {id + ' field'}>
			<label htmlFor = {id}>{label}</label>
			<div className = {id + 'input'}>
			<Icon iconName={iconName}/>
			<input type={type} id={id} required = {required} value = {value} onChange = {onChange} placeholder={placeholder}/>
			</div>
			<p className= {id + '-error error'}>{error}</p>
		</div>
	)
}
