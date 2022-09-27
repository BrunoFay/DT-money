import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/Logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
