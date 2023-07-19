import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-top: -5.5rem;
  gap: 2rem;

  border-radius: 7px;

  > img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 5px;
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.6;
      margin-bottom: 0.5rem;

      color: ${({ theme }) => theme['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      list-style: none;
      gap: 0.5rem;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
      line-height: 1.6;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
    }
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.6;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 1.5rem;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-subtitle']};

      svg {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`
