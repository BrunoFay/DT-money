import React from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import {ArrowCircleUp,ArrowCircleDown,CurrencyDollar} from 'phosphor-react'

export default function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color={'#00B37E'}/>
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color={'#F75A68'}/>
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={'white'}/>
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
