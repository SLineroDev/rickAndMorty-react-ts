import { Character } from 'models/Character'
import { useEffect, useState } from 'react'
import { getJSONCharacters } from 'services/api'
import CharacterCard from '../Card/CharacterCard'
import './CharacterList.css'

interface CharacterListProps {
  filter: string
}

export default function CharacterList (props: CharacterListProps): JSX.Element {
  const [characterList, setCharacterList] = useState<Character[]>([])

  function filterCharacters (character: Character): boolean {
    return character.name.toLowerCase().includes(props.filter.toLowerCase())
  }

  useEffect(() => {
    getJSONCharacters()
      .then(resp => { setCharacterList(resp.results) })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='characters-list'>
      {
        characterList.filter(filterCharacters).map((character: Character, index) =>
          <CharacterCard key={index} character={character} />)
      }
    </div>
  )
}
