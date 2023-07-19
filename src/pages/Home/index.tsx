import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Post } from './components/Post'
import { Content, HomeContainer, Search } from './styles'

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

        <div>
          <Post />
          <Post />
        </div>
      </Content>
    </HomeContainer>
  )
}
