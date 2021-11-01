import { Character } from 'models/Character'
import { useEffect, useState } from 'react'
import { getJSONCharacters } from 'services/api'
import CharacterCard from '../Card/CharacterCard'
import './CharacterList.css'

export default function CharacterList (): JSX.Element {
  const [characterList, setCharacterList] = useState<Character[]>([])

  useEffect(() => {
    getJSONCharacters()
      .then(resp => { setCharacterList(resp.results) })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='characters-list'>
      {
        characterList.map((character: Character, index) =>
          <CharacterCard key={index} character={character} />)
      }
    </div>
  )
}
