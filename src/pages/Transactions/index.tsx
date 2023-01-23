import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
            <TransactionTable>
                <tbody>
                    <tr>
                        <td width='50%'>Desenvolvimento de site</td>
                        <td><PriceHighlight variant="income">PriceHighlight</PriceHighlight></td>
                        <td>Venda</td>
                        <td>19/08/2004</td>
                    </tr>
                    <tr>
                        <td width='50%'>Desenvolvimento de site</td>
                        <td><PriceHighlight variant="outcome">PriceHighlight</PriceHighlight></td>
                        <td>Venda</td>
                        <td>19/08/2004</td>
                    </tr>
                </tbody>
            </TransactionTable>
            </TransactionContainer>
        </div>
    )
}