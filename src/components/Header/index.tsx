import {
  CartContainer,
  HeaderContainer,
  Location,
  LocationCartContainer,
} from './styles'
import headerLogo from '../../assets/header-logo.svg'
import cart from '../../assets/cart.svg'
import location from '../../assets/location.svg'
export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="Logo coffee delivery" />

      <LocationCartContainer>
        <Location>
          <img src={location} alt="" />
          <span>Montes Claros - MG</span>
        </Location>
        <CartContainer>
          <img src={cart} alt="" />
        </CartContainer>
      </LocationCartContainer>
    </HeaderContainer>
  )
}
