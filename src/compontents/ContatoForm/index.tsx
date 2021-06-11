import axios from "axios";
import React from "react";

class ContatoForm extends React.Component {

    state = {
        nome: '',
        endereco: {
            cep: '',
            cidade: '',
            rua: '',
            bairro: '',
            numero: '',
            complemento: ''
        },
        telefone: {
            ddd: '',
            telefone: '',
            operadora: ''
        }
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/contatos`, {
            nome: this.state.nome,
            telefone: this.state.telefone,
            endereco: this.state.endereco
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-md-12">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control" value={this.state.nome} name="nome" onChange={this.handleChange} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">DDD</label>
                            <input type="text" className="form-control" id="inputAddress2" value={this.state.telefone.ddd} placeholder="DDD" name="ddd" onChange={this.handleChange} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="inputAddress2" value={this.state.telefone.telefone} placeholder="Telefone/Celular" name="telefone" onChange={this.handleChange} />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Operadora</label>
                            <input type="text" className="form-control" id="inputAddress2" value={this.state.telefone.operadora} placeholder="Operadora" name="operadora" onChange={this.handleChange} />
                        </div>


                        <div className="col-md-4">
                            <label className="form-label">CEP</label>
                            <input type="text" className="form-control" name="cep" value={this.state.endereco.cep} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cidade</label>
                            <input type="text" className="form-control" name="cidade" value={this.state.endereco.cidade} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Bairro</label>
                            <input type="text" className="form-control" name="bairro" value={this.state.endereco.bairro} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Rua</label>
                            <input type="text" className="form-control" name="rua" value={this.state.endereco.rua} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Numero</label>
                            <input type="text" className="form-control" name="numero" value={this.state.endereco.numero} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Complemento</label>
                            <input type="text" className="form-control" name="complemento" value={this.state.endereco.complemento} onChange={this.handleChange} />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ContatoForm;