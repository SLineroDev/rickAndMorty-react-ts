import { CharacterResp } from '../models/Character'

const API_URL = 'https://rickandmortyapi.com/api/character'

export async function getAllCharacters (): Promise<CharacterResp> {
  return await fetch(API_URL).then(async res => await res.json())
}

export async function getJSONCharacters (): Promise<CharacterResp> {
  return await fetch(import.meta.env.BASE_URL + 'data.json').then(async res => await res.json())
}
