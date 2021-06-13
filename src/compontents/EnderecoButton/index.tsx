import { Link } from "react-router-dom"

type Props = {
    idUsuario: number;
}


function EnderecoButton(idUsuario : Props){
    var link = `/formEndereco/${idUsuario.idUsuario}`
    return(
        
        <button type="button" className="btn btn-success">
        <Link to={link}>
            Endereco
        </Link>
    </button>
    )
}
export default EnderecoButton