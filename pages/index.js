import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Picture from '../components/Picture'
import MiniPicture from '../components/MiniPicture'
import Button from '../components/Button'
import Divisor from '../components/Divisor'

export default function App() {
  return (
    <div>
      <Banner/>
      <div id="main-container">
        
        <Divisor type="bottom"/>
        <Picture source="image/Logo.png"/>
        <Divisor type="top"/> 
        <h1>Cota para Lua de Mel</h1>
        <Divisor type="bottom"/>
        <Picture source="image/colagem1.png" description="Imagem dos noivos"/>
        <Divisor type="top"/>
        <Container back="back1">
          <p className>"Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra." (Mark Twain)</p>
        </Container>
        <Divisor type="bottom"/>
        <Picture source="image/colagem2.png" description="Imagem dos noivos" />
        <Divisor type="top"/>
        <Container back="back2">
          <p>Nós já vivemos juntos há algum tempo. Não precisamos de nada novo no momento. Mas se tiver a intenção de nos presentear pode nos mandar em dinheiro o valor que iria investir em um presente.</p>
        </Container>
        <Divisor type="bottom"/>
        <Button>PIX</Button>
        <Divisor type="top"/>
        <MiniPicture source="image/7.jpeg" description="Imagem dos noivos" />
        <MiniPicture source="image/13.jpg" description="Imagem dos noivos" />
        <MiniPicture source="image/6.jpg" description="Imagem dos noivos" />
        <MiniPicture source="image/14.jpg" description="Imagem dos noivos" />
        <Divisor type="bottom"/>
        <Footer/>
      </div>
    </div>
  )
}