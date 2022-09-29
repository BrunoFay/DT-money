import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { transactionContext } from '../../context/TransactionsContext'
import { priceFormatter } from '../../utils/formatters'
import { SummaryCard, SummaryContainer } from './styles'

export default function Summary() {
  const transactions = useContextSelector(
    transactionContext,
    (context) => context.transactions,
  )
  const summaryValues = useMemo(
    () =>
      transactions.reduce(
        (acc, curr) => {
          if (curr.type === 'income') {
            acc.income += curr.price
            acc.total += curr.price
          } else {
            acc.outcome += curr.price
            acc.total -= curr.price
          }
          return acc
        },
        { income: 0, outcome: 0, total: 0 },
      ),
    [transactions],
  )
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color={'#00B37E'} />
        </header>
        <strong> {priceFormatter.format(summaryValues.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color={'#F75A68'} />
        </header>
        <strong> {priceFormatter.format(summaryValues.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={'white'} />
        </header>
        <strong> {priceFormatter.format(summaryValues.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
