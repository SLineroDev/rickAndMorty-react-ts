import { Character } from 'models/Character'
import LazyLoad from 'react-lazyload'
import './CharacterCard.css'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard (props: CharacterCardProps): JSX.Element {
  const { name, status, image } = props.character

  return (
    <div className='character-card'>
      <LazyLoad height={300} offset={100} once>
        <img src={image} width='800px' height='800px' alt='' />
      </LazyLoad>
      <div><strong>{name}</strong></div>
      <div>{status}</div>
    </div>
  )
}
