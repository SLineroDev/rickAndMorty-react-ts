import './nav.css'

interface NavProps {
  filterValue: string
  onFilterChange: Function
}

export default function Nav (props: NavProps): JSX.Element {
  return (
    <nav>
      <img src='/logo.png' alt='' />
      <input type='text' name='' id='' value={props.filterValue} onChange={value => props.onFilterChange(value.target.value)} />
      <button>Buscar</button>
    </nav>
  )
}
