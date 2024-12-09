import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Barbosa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Mario Pereira
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenherio Fron-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
