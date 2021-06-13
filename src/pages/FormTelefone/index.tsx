import Footer from "../../compontents/Footer"
import NavBar from "../../compontents/NavBar"
import { useHistory, useParams } from 'react-router-dom'
import CardNomeContato from "../../compontents/CardNomeContato";

type UserId = {
    id: string;
  };

function FormEndereco(){
    const { id } = useParams<UserId>();
    let index = id.replace("id=", "")
    
    return (
        <>
            <NavBar/>
            <div className="container">
                <CardNomeContato idUsuario={id}/>
            </div>
            <h1>{index}</h1>
            <Footer/>
        </>
    )
}
export default FormEndereco