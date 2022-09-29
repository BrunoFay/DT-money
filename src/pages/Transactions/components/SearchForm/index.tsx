import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { transactionContext } from '../../../../context/TransactionsContext'
import { SearchFormContainer } from './styles'

const searchZodSchema = zod.object({
  search: zod.string(),
})

type SearchInputForm = zod.infer<typeof searchZodSchema>

export default function SearchForm() {
  const getAllTransactions = useContextSelector(
    transactionContext,
    (context) => context.getAllTransactions,
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputForm>({
    resolver: zodResolver(searchZodSchema),
  })

  async function handleSearchForm(data: SearchInputForm) {
    await getAllTransactions(data.search)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <input
        type="text"
        placeholder="Search by transactions"
        {...register('search')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
