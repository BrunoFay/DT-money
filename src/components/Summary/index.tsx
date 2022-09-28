import React, { useContext } from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { transactionContext } from '../../context/Transactions'
import { priceFormatter } from '../../utils/formatters'

export default function Summary() {
  const { transactions } = useContext(transactionContext)
  const summaryValues = transactions.reduce(
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
