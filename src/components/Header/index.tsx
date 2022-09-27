import React from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
          <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title />
              <Dialog.Description />
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
