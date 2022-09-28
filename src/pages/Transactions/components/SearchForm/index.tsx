import React, { useContext } from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { transactionContext } from '../../../../context/Transactions'

const searchZodSchema = zod.object({
  search: zod.string(),
})

type SearchInputForm = zod.infer<typeof searchZodSchema>

export default function SearchForm() {
  const { getAllTransactions } = useContext(transactionContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputForm>({
    resolver: zodResolver(searchZodSchema),
  })

  async function handleSearchForm(data: SearchInputForm) {
    console.log(data)
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
