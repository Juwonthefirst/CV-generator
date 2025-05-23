import { User, Mail, Phone, MapPin, GraduationCap, School, CalendarDays, CirclePlus, Pencil, Trash2, Building, BriefcaseBusiness, Layers, FolderGit2, Award } from 'lucide-react'

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
	stack: <Layers />,
	project: <FolderGit2 />,
	skill: <Award />
}

export default function Icon({iconName}){
	return iconLibrary[iconName]		
}
