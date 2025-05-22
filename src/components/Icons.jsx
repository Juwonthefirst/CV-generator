import { User, Mail, Phone, MapPin, GraduationCap, School, CalendarDays, CirclePlus} from 'lucide-react'

const iconLibrary  = {
	user:<User />,
	mail: <Mail />,
	phone: <Phone />,
	map: <MapPin />,
	degree: <GraduationCap />,
	school: <School />,
	calendar: <CalendarDays />,
	add: <CirclePlus />,
	edit: <Pencil />,
	trash: <Trash2 />,
	company: <Building />,
	buisness: <BriefcaseBusiness />,
}

export default function Icon({iconName}){
	return iconLibrary[iconName]		
}
