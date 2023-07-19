import { MainContainer, ProfileContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { GoArrowUpRight } from 'react-icons/go'
import { BsBuildingFill } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://github.com/jmoura-dev.png"
        alt="Imagem de perfil do usuário"
      />

      <MainContainer>
        <div>
          <h2>Jackson Moura</h2>
          <a
            href="https://github.com/jmoura-dev"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <GoArrowUpRight size={16} />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <span>
            <AiFillGithub />
            jmoura-dev
          </span>
          <span>
            <BsBuildingFill /> Desenvolvedor
          </span>
          <span>
            <FaUserFriends /> 10 seguidores
          </span>
        </footer>
      </MainContainer>
    </ProfileContainer>
  )
}
