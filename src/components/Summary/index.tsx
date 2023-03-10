import { SummaryCard, SummaryContainer } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { useContext } from 'react'
import { priceFormartter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormartter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormartter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyCircleDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormartter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
