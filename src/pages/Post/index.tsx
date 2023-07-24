import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PostInfo } from './components/PostInfo'
import { PostContainer, Content, Main } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface UserProps {
  login: string
}

interface PostInfoProps {
  title: string
  user: UserProps | undefined
  comments: number
  created_at: string
  body: string
}

export function Post() {
  const params = useParams()
  const [post, setPost] = useState({} as PostInfoProps)

  useEffect(() => {
    async function fetchUniquePost() {
      const response = await api.get(
        `repos/jmoura-dev/github-blog/issues/${params.id}`,
      )
      setPost(response.data)
    }
    fetchUniquePost()
  }, [params.id])

  return (
    <PostContainer>
      <Header />
      <Content>
        <PostInfo
          title={post.title}
          comments={post.comments}
          user={post.user?.login}
          created_at={
            post.created_at &&
            formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })
          }
        />

        <Main>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </Main>
      </Content>
    </PostContainer>
  )
}
