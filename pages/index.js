import Title from '../components/Title'
import Container from '../components/Container'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Galery from '../components/Galery'

export default function App() {
  return (
    <div>
      <header id='banner'></header>
      <div id="main-container">
        <Title/>
        <img src="image/colagem1.png" alt="Imagem dos noivos"/>
        <Container back="back1">
          <p className>"Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra." (Mark Twain)</p>
        </Container>
        <img src="image/colagem2.png" alt="Imagem dos noivos" />
        <Container back="back2">
          <p>Nós já vivemos juntos há algum tempo. Não precisamos de nada novo no momento. Mas se tiver a intenção de nos presentear pode nos mandar em dinheiro o valor que iria investir em um presente.</p>
        </Container>
        <Button>PIX</Button>
        <Galery/>
        <Footer/>
      </div>
    </div>
  )
}
