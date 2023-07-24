import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Publication } from './components/Publication'
import { Content, HomeContainer, Main, Search } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

interface ArrayIssuesProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface GithubDataProps {
  total_count: number
  items: ArrayIssuesProps[]
}

export function Home() {
  const [data, setData] = useState({} as GithubDataProps)
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')

  function handleSelectPost(item: number) {
    navigate(`/post/${item}`)
  }

  useEffect(() => {
    async function fetchGithubData() {
      if (search) {
        const response = await api.get(
          `search/issues?q=${search}%20${search}repo:jmoura-dev/github-blog`,
        )

        setData(response.data)
      } else if (!search) {
        const response = await api.get(
          'search/issues?q=api%20github%20repo:jmoura-dev/github-blog',
        )

        setData(response.data)
      }
    }
    fetchGithubData()
  }, [search])

  return (
    <HomeContainer>
      <Header />
      <Content>
        <Profile />

        <Search>
          <div>
            <strong>Publicações</strong>
            <span>{`${data.total_count} publicações`}</span>
          </div>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>

        <Main>
          {data.items &&
            data.items.map((item) => {
              return (
                <Publication
                  key={item.number}
                  title={item.title}
                  description={item.body}
                  date={formatDistanceToNow(new Date(item.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                  onClick={() => handleSelectPost(item.number)}
                />
              )
            })}
        </Main>
      </Content>
    </HomeContainer>
  )
}
