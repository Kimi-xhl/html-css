export default function FilterButton(props) {
  // all / completed / incomplete
  return (
    <button 
      type="button" 
      className="btn toggle-btn" 
      onClick={() => props.setFilter(props.name)}
      aria-pressed={props.isPressed}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  )
}