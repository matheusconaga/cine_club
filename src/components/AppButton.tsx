import {styled} from "styled-components";

export default function AppButton() {

    return (
        <Button>
            Entrar
        </Button>
    )

}

const Button = styled.button`

    background-color: rgb(46, 129, 254, 100);
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
    background-color: rgb(36, 109, 214);
    }

    &:active {
    background-color: rgb(26, 89, 194);
    }

`;