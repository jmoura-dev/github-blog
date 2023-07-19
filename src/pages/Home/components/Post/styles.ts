import { styled } from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 7px;
  width: 26rem;
  height: 16.25rem;

  > header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > h2 {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-title']};
    }

    > span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`
