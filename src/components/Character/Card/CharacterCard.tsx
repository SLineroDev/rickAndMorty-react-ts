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
      <LazyLoad height={200} offset={200} once>
        <img src={image} alt='' />
      </LazyLoad>
      <div><strong>{name}</strong></div>
      <div>{status}</div>
    </div>
  )
}
