import 'App.css'
import CharacterList from 'components/Character/List/CharacterList'
import Nav from 'components/nav/nav'
import { useState } from 'react'

function App (): JSX.Element {
  const [filter, setFilter] = useState('')

  return (
    <>
      <Nav filterValue={filter} onFilterChange={setFilter} />
      <CharacterList filter={filter} />
    </>
  )
}

export default App
