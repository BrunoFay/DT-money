import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { transactionContext } from '../../context/TransactionsContext'
import {
  CloseModalButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'

const newTransactionsFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionsFormSchema>

export default function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionsFormSchema),
  })
  const createNewTransaction = useContextSelector(
    transactionContext,
    (context) => context.createNewTransaction,
  )

  async function handleNewTransactionForm(data: NewTransactionFormInputs) {
    await createNewTransaction(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseModalButton>
          <X size={24} />
        </CloseModalButton>
        <form action="" onSubmit={handleSubmit(handleNewTransactionForm)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionTypeContainer>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
