import React from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const searchZodSchema = zod.object({
  search: zod.string()
})

type SearchInputForm = zod.infer<typeof searchZodSchema>

export default function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchInputForm>({
    resolver: zodResolver(searchZodSchema)
  })

  function handleSearchForm(data: SearchInputForm) {
    console.log(data);

  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <input type="text" placeholder='Search by transactions' {...register('search')} />
      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
