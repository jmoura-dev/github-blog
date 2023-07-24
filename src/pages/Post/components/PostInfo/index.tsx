import { NavLink } from 'react-router-dom'
import { PostInfoContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { BiChevronLeft } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { GoArrowUpRight } from 'react-icons/go'
import { FaComment } from 'react-icons/fa'

interface PostInfoProps {
  title: string
  user: string | undefined
  comments: number
  created_at: string
}

export function PostInfo({ title, user, comments, created_at }: PostInfoProps) {
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
      <h1>{title}</h1>
      <footer>
        <span>
          <AiFillGithub />
          {user}
        </span>
        <span>
          <BsFillCalendarEventFill size={14} /> {created_at}
        </span>
        <span>
          <FaComment /> {`${comments} comentários`}
        </span>
      </footer>
    </PostInfoContainer>
  )
}
