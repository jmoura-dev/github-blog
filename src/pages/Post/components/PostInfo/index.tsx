import { NavLink } from 'react-router-dom'
import { PostInfoContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { BiChevronLeft } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { GoArrowUpRight } from 'react-icons/go'
import { FaComment } from 'react-icons/fa'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <NavLink to="/">
          <BiChevronLeft size={20} />
          voltar
        </NavLink>
        <a
          href="https://github.com/jmoura-dev/github-blog"
          target="_blank"
          rel="noreferrer"
        >
          ver no github
          <GoArrowUpRight size={16} />
        </a>
      </header>
      <h1>JavaScript data types and data structures</h1>
      <footer>
        <span>
          <AiFillGithub />
          JMouraDev
        </span>
        <span>
          <BsFillCalendarEventFill size={14} /> Há 1 dia
        </span>
        <span>
          <FaComment /> 5 comentários
        </span>
      </footer>
    </PostInfoContainer>
  )
}
