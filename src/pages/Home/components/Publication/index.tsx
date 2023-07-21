import { PublicationContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface PublicationProps {
  title: string
  date: string
  description: string
}

export function Publication({ title, date, description }: PublicationProps) {
  return (
    <PublicationContainer>
      <header>
        <h2>{title}</h2>
        <span>{date}</span>
      </header>

      <p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
      </p>
    </PublicationContainer>
  )
}
