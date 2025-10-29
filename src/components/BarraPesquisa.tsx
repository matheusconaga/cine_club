import styled from "styled-components"
import { Search } from 'lucide-react';

export default function BarraPesquisa() {
    return (
        <SearchContainer>
            <Input
                alt="barra de pesquisa"
                placeholder="Busque por filmes ou séries..."
            />
            <SearchButton>
                <Search size={24} color="white" />
            </SearchButton>
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(161, 161, 161, 0.2);
    border-radius: 15px;
    padding: 5px 10px;
    width: 350px;
`;

const Input = styled.input`
    flex: 1;
    padding-left: 16px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    outline: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;

    &:hover {
        opacity: 0.8;
    }
`;
