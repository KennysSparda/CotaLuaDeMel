export default function MiniPicture(props) {
  return (
    <a href={props.source}>
      <img id='mini-picture' src={props.source} alt={props.description}></img>
    </a>
  )
}

// Example: <Picture source="path/to/image.jpg" description="image"/>