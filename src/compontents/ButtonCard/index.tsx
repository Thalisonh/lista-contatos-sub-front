import { Link } from "react-router-dom";

function ButtonCard(){
    return (
        <button type="button" className="btn btn-success" >
            <Link to="/formContatos">
                Alterar
            </Link>
        </button>
    )
}

export default ButtonCard