import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleUp , ArrowCircleDown ,CurrencyCircleDollar} from 'phosphor-react'

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>

                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>R$ 17.40,000</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>

                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>R$ 17.40,000</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>

                    <CurrencyCircleDollar size={32} color="#fff"/>
                </header>

                <strong>R$ 17.40,000</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}