
export default function Divisor(props) {
  if (props.type === "top") {
    return <img id="divisor" src="image/divisor-top.png"/>
  } else {
    return <img id="divisor" src="image/divisor-bottom.png"/>
  }
}