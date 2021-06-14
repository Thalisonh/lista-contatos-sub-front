import Footer from "../../compontents/Footer"
import NavBar from "../../compontents/NavBar"
import { useParams } from 'react-router-dom'
import CardNomeContato from "../../compontents/CardNomeContato";
import TelefoneForm from "../../compontents/TelefoneForm";
import TableTelefone from "../../compontents/TableTelefone";

type UserId = {
    id: string;
  };

function FormTelefone(){
    const { id } = useParams<UserId>();
    let index = id.replace("id=", "")
    
    return (
        <>
            <NavBar/>
            <CardNomeContato idUsuario={id}/>
            <TelefoneForm idUsuario={id}/>
            <TableTelefone idUsuario={id}/>
            <Footer/>
        </>
    )
}
export default FormTelefone