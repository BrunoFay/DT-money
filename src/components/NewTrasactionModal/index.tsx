import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseModalButton, Content, Overlay, TransactionTypeButton, TransactionTypeContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'



const newTransactionsFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionsFormSchema>

export default function NewTransactionModal() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema)
  })
  function handleNewTransactionForm(data: NewTransactionFormInputs) {
    console.log(data);

  }
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
        <form action="" onSubmit={handleSubmit(handleNewTransactionForm)}>
          <input type="text" placeholder='Description' required {...register('description')} />
          <input type="number" placeholder='Price' required {...register('price', { valueAsNumber: true })} />
          <input type="text" placeholder='Category' required {...register('category')} />
          <TransactionTypeContainer>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionTypeContainer>
          <button type='submit' disabled={isSubmitting}>
            Create
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
