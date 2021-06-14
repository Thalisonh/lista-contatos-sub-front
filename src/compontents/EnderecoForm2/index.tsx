import axios from "axios";
import { useState } from "react";
import ButtonCadastrar from "../ButtonCadastrar"

type Props = {
    idUsuario: string;
}

function EnderecoForm2(idUsuario: Props) {

    const [endereco, setEndereco] = useState({
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
    })

    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplento] = useState('')

    async function cepSearch(event: any){

        if(cep.length === 8){
            axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(res => {
            setEndereco(res.data)
            console.log(res.data);
        })
        await console.log(`ENDERECO ${endereco.street}`)
        }
    }

    function handleSubmit(event: any) {  

        console.log("entrou")
        console.log(idUsuario)

        axios.put(`http://localhost:8080/enderecos/id=${idUsuario.idUsuario}`, {
            cep: cep,
            estado: estado,
            cidade: cidade,
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento,
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
                    <div className="col-md-3">
                        <label className="form-label">CEP</label>
                        <input type="text" className="form-control" name="cep" onChange={event => setCep(event.target.value)} onBlur={cepSearch}/>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Cidade</label>
                        <input type="text" className="form-control" name="cidade" onChange={event => setCidade(event.target.value)} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Estado</label>
                        <input type="text" className="form-control" name="estado" onChange={event => setEstado(event.target.value)} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Bairro</label>
                        <input type="text" className="form-control" name="bairro" onChange={event => setBairro(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Rua</label>
                        <input type="text" className="form-control" name="rua" onChange={event => setRua(event.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Numero</label>
                        <input type="text" className="form-control" name="numero" onChange={event => setNumero(event.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Complemento</label>
                        <input type="text" className="form-control" name="complemento" onChange={event => setComplento(event.target.value)} />
                    </div>
                </div>
                <ButtonCadastrar />
            </form>
        </div>
    )
}
export default EnderecoForm2