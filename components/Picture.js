export default function Picture(props) {
  return (
    <a href={props.source}>
      <img class='galery-itens' id='picture' src={props.source} alt={props.description}></img>
    </a>
  )
}

// Example: <Picture source="path/to/image.jpg" description="image"/>