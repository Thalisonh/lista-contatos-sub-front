import axios from "axios"
import { useEffect, useState } from "react"
import { ContatoPage } from "../../types/contatos";
import ButtonCard from "../ButtonCard";
import ButtonInsert from "../ButtonInsert";
import Pagination from "../Pagination";
import EnderecoButton from "../EnderecoButton";
import TelefoneButton from "../TelefoneButton";

function TableCard() {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<ContatoPage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/contatos?page=${activePage}&size=10`)
            .then(response => {
                setPage(response.data)
            })
    }, [activePage])

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <div className="container">
                <ButtonInsert />
                <Pagination page={page} onPageChange={changePage} />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {page.content?.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.telefone.map(telefone => (
                                        <p key={telefone.id}>({telefone.ddd}) {telefone.telefone}</p>
                                    ))}</td>
                                    <td>{item.endereco.map(endereco => (
                                        <p  key={endereco.id}>{endereco.rua} {endereco.bairro} {endereco.cidade}</p>
                                    ))}</td>
                                    <td>
                                        <ButtonCard />
                                    </td>
                                    <td>
                                        <EnderecoButton idUsuario={item.id}/>
                                    </td>
                                    <td>
                                        <TelefoneButton idUsuario={item.id}/>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TableCard