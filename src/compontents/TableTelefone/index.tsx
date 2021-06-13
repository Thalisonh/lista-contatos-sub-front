import axios from "axios";
import { useEffect, useState } from "react";
import { Telefone } from "../../types/telefone";

type Props = {
    idUsuario: string;
}

function TableTelefone(idUsuario : Props){

    const [telefone, setTelefone] = useState<Array<Telefone>>();

    const [activePage, setActivePage] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8080/telefone/id=${idUsuario.idUsuario}`)
            .then(response => {
                console.log(response.data)
                setTelefone(response.data)
            })
    },[activePage])

    return(
        <>
            <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>DDD</th>
                        <th>Telefone/Celular</th>
                        <th>Operadora</th>
                    </tr>
                </thead>
                <tbody>
                    {telefone?.map(item => (
                        <tr key={item.id}>
                            <td>{item.ddd}</td>
                            <td>{item.telefone}</td>
                            <td>{item.operadora}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
            </div>
        </>
    )
}

export default TableTelefone