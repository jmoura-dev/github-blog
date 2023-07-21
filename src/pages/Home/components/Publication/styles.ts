import { styled } from 'styled-components'

export const PublicationContainer = styled.button`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 7px;
  width: 26rem;
  height: 16.25rem;
  cursor: pointer;
  border: none;
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme['base-profile']};
  }

  > header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

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
      width: 6rem;
      margin-top: 0.5rem;
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-top: 1.25rem;
    color: ${({ theme }) => theme['base-span']};
    max-width: 23rem;
  }
`
