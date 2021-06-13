import axios from "axios";
import { useEffect, useState } from "react";
import { Endereco } from "../../types/endereco";

type Props = {
    idUsuario: string;
}

function TableEndereco(idUsuario : Props){

    const [endereco, setEndereco] = useState<Array<Endereco>>();

    const [activePage, setActivePage] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8080/enderecos/id=${idUsuario.idUsuario}`)
            .then(response => {
                console.log(response.data)
                setEndereco(response.data)
            })
    },[activePage])

    return(
        <>
            <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>CEP</th>
                        <th>Estado</th>
                        <th>Cidade</th>
                        <th>Bairro</th>
                        <th>Rua</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                    </tr>
                </thead>
                <tbody>
                    {endereco?.map(item => (
                        <tr key={item.id}>
                            <td>{item.cep}</td>
                            <td>{item.estado}</td>
                            <td>{item.cidade}</td>
                            <td>{item.bairro}</td>
                            <td>{item.rua}</td>
                            <td>{item.numero}</td>
                            <td>{item.complemento}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
            </div>
        </>
    )
}

export default TableEndereco