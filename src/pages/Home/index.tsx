import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Publication } from './components/Publication'
import { Content, HomeContainer, Main, Search } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Content>
        <Profile />

        <Search>
          <div>
            <strong>Publicações</strong>
            <span>6 publicações</span>
          </div>

          <input type="text" placeholder="Buscar conteúdo" />
        </Search>

        <Main>
          <Publication />
          <Publication />
          <Publication />
          <Publication />
        </Main>
      </Content>
    </HomeContainer>
  )
}
