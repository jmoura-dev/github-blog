import { styled } from 'styled-components'

export const PostInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  margin-top: -5rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.6;
      text-transform: uppercase;
      color: ${({ theme }) => theme.blue};
      gap: 0.2rem;
    }
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.7rem;
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-span']};
    }
  }
`
