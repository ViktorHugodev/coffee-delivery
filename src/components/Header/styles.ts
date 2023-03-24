import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
`
export const CartContainer = styled.div`
  height: 38px;
  width: 38px;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Location = styled.div`
  padding: 0.5rem;
  gap: 4px;
  height: 38px;
  background-color: ${(props) => props.theme['purple-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
export const LocationCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`
