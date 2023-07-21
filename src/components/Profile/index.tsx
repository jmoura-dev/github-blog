import { MainContainer, ProfileContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { GoArrowUpRight } from 'react-icons/go'
import { BsBuildingFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface UserProps {
  name: string
  avatar_url: string
  html_url: string
  followers: string
  login: string
  company: string | null
  bio: string
}

export function Profile() {
  const [user, setUser] = useState({} as UserProps)

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get('/users/jmoura-dev')
      setUser(response.data)
    }
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="Imagem de perfil do usuário" />

      <MainContainer>
        <div>
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <GoArrowUpRight size={16} />
          </a>
        </div>

        <p>{user.bio}</p>

        <footer>
          <span>
            <AiFillGithub />
            {user.login}
          </span>
          <span>
            <BsBuildingFill /> {user.company ? user.company : 'Não informado'}
          </span>
          <span>
            <FaUserFriends /> {`${user.followers} Seguidores`}
          </span>
        </footer>
      </MainContainer>
    </ProfileContainer>
  )
}
