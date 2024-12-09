import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
