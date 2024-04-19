import { Photo } from "./photo"

export interface Member {
  id: number
  userName: string
  photoUrl: string
  age: number
  knownAs: string
  created: Date
  lastActive: Date
  gender: string
  introduction: string
  lookingFor: string
  city: string
  country: string
  interests: string
  photos: Photo[]
}


