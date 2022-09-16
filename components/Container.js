export default function Container(props) {
  return (
    <section>
      <img id="divisor" src="image/divisor-top.png"/>
      <div id={props.back}>
        <div id='container'>
            {props.children}
        </div>
      </div>
      <img id="divisor" src="image/divisor-bottom.png"/>
    </section>
  )
}