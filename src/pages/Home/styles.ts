import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`

export const Content = styled.div`
  max-width: 58rem;
  padding: 0 2rem;
  margin: 0 auto;
`

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 4.5rem;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  > input {
    border: 1px solid ${({ theme }) => theme['base-border']};
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-title']};
  }
`

export const Main = styled.ul`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`
