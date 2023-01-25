import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text"placeholder="Buscar por transações" />
            <button>
                <MagnifyingGlass />
                buscar
            </button>
        </SearchFormContainer>
    )
}