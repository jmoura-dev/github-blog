import { PublicationContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface PublicationProps {
  title: string
  date: string
  description: string
  onClick: () => void
}

export function Publication({
  title,
  date,
  description,
  onClick,
}: PublicationProps) {
  return (
    <PublicationContainer onClick={onClick}>
      <header>
        <h2>{title}</h2>
        <span>{date}</span>
      </header>

      <div>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </PublicationContainer>
  )
}
