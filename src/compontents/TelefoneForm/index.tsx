import axios from "axios";
import { useState } from "react";
import ButtonCadastrar from "../ButtonCadastrar";

type Props = {
    idUsuario: string;
}

function TelefoneForm(idUsuario: Props) {

    const [ddd, setDdd] = useState('')
    const [telefone, setTelefone] = useState('')
    const [operadora, setOperadora] = useState('')

    function handleSubmit(event: any) {
        
        console.log("entrou")
        console.log(idUsuario)

        axios.put(`http://localhost:8080/telefone/id=${idUsuario.idUsuario}`, {
            ddd: ddd,
            telefone: telefone,
            operadora: operadora,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="container row g-3">
                        <div className="col-md-4">
                            <label className="form-label">DDD</label>
                            <input type="text" className="form-control" name="ddd" onChange={event => setDdd(event.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Telefone/Celular</label>
                            <input type="text" className="form-control" name="telefone" onChange={event => setTelefone(event.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Operadora</label>
                            <input type="text" className="form-control" name="operadora" onChange={event => setOperadora(event.target.value)}/>
                        </div>
                    </div>
                    <ButtonCadastrar/>
                </form>
            </div>
        
    )
}

export default TelefoneForm;