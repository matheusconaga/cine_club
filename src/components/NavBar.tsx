import { Link } from "react-router-dom";
import Button from "./AppButton";

export default function NavBar() {
    return (
        <div>

            <Link to="/">Filmes</Link>
            <Link to="/">Séries</Link>
            <Link to="/">Reviews</Link>
            <Button/>
        </div>
    )
}