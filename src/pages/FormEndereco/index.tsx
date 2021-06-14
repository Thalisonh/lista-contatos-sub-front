import Footer from "../../compontents/Footer"
import NavBar from "../../compontents/NavBar"
import { useParams } from 'react-router-dom'
import CardNomeContato from "../../compontents/CardNomeContato";
import TableEndereco from "../../compontents/TableEndereco";
import EnderecoForm from "../../compontents/EnderecoForm";
import EnderecoForm2 from "../../compontents/EnderecoForm2";

type UserId = {
    id: string;
};

function FormEndereco() {
    const { id } = useParams<UserId>();
    let index = id.replace("id=", "")

    return (
        <>
            <NavBar />
            <CardNomeContato idUsuario={id} />
            <EnderecoForm2 idUsuario={id}/>
            <TableEndereco idUsuario={id} />
            <Footer />
        </>
    )
}
export default FormEndereco