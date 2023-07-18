import { HeaderContainer } from './styles'
import leftEffect from '../../assets/leftEffect.svg'
import rightEffect from '../../assets/rightEffect.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />
      <div>
        <img src={logo} alt="" />
        <span>Github blog</span>
      </div>
      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}
