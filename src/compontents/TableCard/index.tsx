import axios from "axios"
import { useEffect, useState } from "react"
import { Contato, ContatoPage } from "../../types/contatos";
import ButtonCard from "../ButtonCard";
import ButtonInsert from "../ButtonInsert";
import CardContato from "../CardContatos"
import Pagination from "../Pagination";

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
                <ButtonInsert/>
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
                                        <p>({telefone.ddd}) {telefone.telefone}</p>
                                    ))}</td>
                                    <td>{item.endereco.map(endereco => (
                                        <p>{endereco.rua} {endereco.bairro} {endereco.cidade}</p>
                                    ))}</td>
                                    <td>
                                    <ButtonCard/>
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