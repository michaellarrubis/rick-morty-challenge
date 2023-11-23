interface ICharacterLocation {
  name: string
  dimension: string
}

export interface ICharacter {
  id: string
  name: string
  status?: string
  species?: string
  type?: string
  gender?: string
  image: string
  origin?: ICharacterLocation
  location?: ICharacterLocation
}

export interface ICharacterState {
  list: ICharacter[] | []
  loading: boolean
  nextPage: number | null
  error: string | null 
}