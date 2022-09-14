export default function Container(props) {
  return (
    <section id={props.back}>
      <div id='container'>
        <aside>
          {props.children}
        </aside>
      </div>
    </section>
  )
}