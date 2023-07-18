import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 18.5rem;
  width: 100%;
  background: ${({ theme }) => theme['base-profile']};

  > img:nth-child(1),
  div {
    padding: 3rem 0 1rem;
  }

  img:last-child {
    padding: 2rem 0 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    span {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-family: 'Coda';
      color: ${({ theme }) => theme.blue};
      font-weight: 400;
    }
  }
`
