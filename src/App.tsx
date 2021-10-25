import { useState, useEffect } from 'react'
import { getJSONCharacters } from './services/api'
import './App.css'
import { Character } from './models/Character'

function App (): JSX.Element {
  const [characterList, setCharacterList] = useState<Character[]>([])

  useEffect(() => {
    getJSONCharacters()
      .then(resp => { setCharacterList(resp.results) })
      .catch((err) => console.log(err))
  }, [])

  return (
    <nav>
      <ul>
        {
          (characterList != null)
            ? characterList.map((character, index) => <li key={index}>{JSON.stringify(character)}</li>)
            : <h3>No data</h3>
        }
      </ul>
    </nav>
  )
}

export default App
