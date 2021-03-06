import axios from "axios"
import { useEffect, useState } from "react"
import { Contato } from "../../types/contatos";

type Props = {
    idUsuario: string;
}

function CardNomeContato(idUsuario : Props){

    const [contato, setContato] = useState<Contato>();

    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/contatos/id=${idUsuario.idUsuario}`)
            .then(response => {
                console.log(response.data)
                setContato(response.data)
            })
    },[activePage])

    return(
        <>
        <div className="container">
            <h1>{contato?.nome}</h1>
        </div>
            {/* <EnderecoForm/> */}
        </>
    )
}
export default CardNomeContato