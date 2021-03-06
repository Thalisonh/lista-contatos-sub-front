import { Link } from "react-router-dom"

type Props = {
    idUsuario: number;
}

function TelefoneButton(idUsuario : Props){
    var link = `/formTelefone/${idUsuario.idUsuario}`
    return(
        
        <button type="button" className="btn btn-success">
        <Link to={link}>
            Telefone
        </Link>
    </button>
    )
}
export default TelefoneButton