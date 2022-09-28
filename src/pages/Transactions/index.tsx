import React, { useState } from 'react'
import { Transaction } from '../../@types/transactionPage'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import { PriceTable, TransactionsContainer, TransactionTable } from './styles'

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function getAllTransactions() {
    const response = await fetch('http://localhost:3001/transactions')
    const data: Transaction[] = await response.json()
    setTransactions(data)
  }
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width='43%'>{transaction.description}</td>
                <td> <PriceTable variant={transaction.type}>R$ {transaction.price}</PriceTable></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>

            ))}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
