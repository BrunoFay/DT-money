import React from 'react'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import { PriceTable, TransactionsContainer, TransactionTable } from './styles'

export default function Transactions() {
  return (
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
        <SearchForm/>
        <TransactionTable>
         <tbody>
          <tr>
            <td width='43%'>Desenvolvimento de site</td>
           <td> <PriceTable variant='income'>R$ 12.000,00</PriceTable></td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width='43%'>Hamburguer</td>
           <td> <PriceTable variant='outcome'>- R$ 59,00</PriceTable></td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
         </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
