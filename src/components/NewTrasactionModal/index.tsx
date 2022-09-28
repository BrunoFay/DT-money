import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseModalButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          New transaction
        </Dialog.Title>

        <CloseModalButton>
          <X size={24} />
        </CloseModalButton>
        <form action="">
          <input type="text" placeholder='Description' required />
          <input type="number" placeholder='Price' required />
          <input type="text" placeholder='Category' required />
          <TransactionTypeContainer>
            <TransactionTypeButton variant='income'>
              <ArrowCircleUp size={24}/>
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant='outcome'>
              <ArrowCircleDown size={24}/>
              Outcome
            </TransactionTypeButton>
          </TransactionTypeContainer>
          <button type='submit'>
            Create
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
