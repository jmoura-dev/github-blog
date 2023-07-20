import { Header } from '../../components/Header'
import { PostInfo } from './components/PostInfo'
import { PostContainer, Content } from './styles'

export function Post() {
  return (
    <PostContainer>
      <Header />
      <Content>
        <PostInfo />
      </Content>
    </PostContainer>
  )
}
