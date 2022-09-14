import Galery from '../components/Galery'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Text from '../components/Text'
import Picture from '../components/Picture'

export default function App() {
  return (
    <div>
      <header>
        <Banner>
          <h1>Cota para Lua de Mel</h1>
          <h1>Cesiane e Mayke</h1>
        </Banner>
      </header>
      <Galery>
        <Picture source="image/4.jpeg" description="Imagem dos noivos" />
        <Picture source="image/5.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Text>"Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra." (Mark Twain)</Text>
      <Galery>
        <Picture source="image/1.jpeg" description="Imagem dos noivos" />
        <Picture source="image/3.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Galery>
        <Picture source="image/6.jpeg" description="Imagem dos noivos" />
        <Picture source="image/7.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Galery>
        <Picture source="image/8.jpeg" description="Imagem dos noivos" />
        <Picture source="image/9.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Galery>
        <Picture source="image/10.jpeg" description="Imagem dos noivos" />
        <Picture source="image/11.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Galery>
        <Picture source="image/12.jpeg" description="Imagem dos noivos" />
        <Picture source="image/13.jpeg" description="Imagem dos noivos" />
        <Picture source="image/14.jpeg" description="Imagem dos noivos" />
        <Picture source="image/15.jpeg" description="Imagem dos noivos" />
      </Galery>
      <Footer/>
    </div>
  )
}