export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  profileImage?: string
  bio: string
  education: string[]
  awards: string[]
  specialty: string // Added specialty field
  contact: {
    email: string
    phone: string
  }
}

export type Specialty =
  | "Todos"
  | "Ortodoncia"
  | "Endodoncia"
  | "Implantología"
  | "Odontopediatría"
  | "Estética Dental"
  | "Periodoncia"
