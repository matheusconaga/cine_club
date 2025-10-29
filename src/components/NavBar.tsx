import { Link } from "react-router-dom";
import Button from "./AppButton";
import logo_esticada from "../assets/logo_esticada.png";
import styled from "styled-components";
import BarraPesquisa from "./BarraPesquisa";

export default function NavBar() {
    return (
        <Nav>
            <Container>
                <LeftGroup>
                    <Link to="/"><Logo src={logo_esticada} /></Link>
                    <Menu>
                        <Itens><Link to="/">Filmes</Link></Itens>
                        <Itens><Link to="/">Séries</Link></Itens>
                        <Itens><Link to="/">Reviews</Link></Itens>
                    </Menu>
                </LeftGroup>
                <RightGroup>
                    <BarraPesquisa />
                    <Button text="Entrar"/>
                </RightGroup>

            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    background-color: rgba(37, 22, 117, 1);
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 8em;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 3em;
`;
const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`;

const Logo = styled.img`
    width: 180px;
`;

const Menu = styled.ul`
    display: flex;
    gap: 3em; 
    margin: 0;
    padding: 0;
`;

const Itens = styled.li`
    list-style: none;

    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`;
