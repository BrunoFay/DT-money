import { useContextSelector } from 'use-context-selector'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { transactionContext } from '../../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatters'
import SearchForm from './components/SearchForm'
import { PriceTable, TransactionsContainer, TransactionTable } from './styles'

export default function Transactions() {
  const transactions = useContextSelector(
    transactionContext,
    (context) => context.transactions,
  )
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="43%">{transaction.description}</td>
                <td>
                  <PriceTable variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceTable>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
