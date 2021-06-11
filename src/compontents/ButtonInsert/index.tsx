import { Link } from "react-router-dom";

function ButtonInsert() {
    return (
        <button type="button" className="btn btn-success">
            <Link to="/formContatos">
                Adicionar
            </Link>
        </button>
    )
}

export default ButtonInsert