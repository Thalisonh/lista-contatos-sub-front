import axios from 'axios';
import React, { useState } from 'react';

class EnderecoForm extends React.Component {

    state = {
        cep: '',
        estado: '',
        cidade: '',
        rua: '',
        bairro: '',
        numero: '',
        complemento: '',
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event: any) => {

        axios.post(`http://localhost:8080/contatos`, {
            cep: this.state.cep,
            estado: this.state.estado,
            cidade: this.state.cidade,
            rua: this.state.rua,
            bairro: this.state.bairro,
            numero: this.state.numero,
            complemento: this.state.complemento,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container row g-3">
                        <div className="col-md-4">
                            <label className="form-label">CEP</label>
                            <input type="text" className="form-control" name="cep"  onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Cidade</label>
                            <input type="text" className="form-control" name="cidade"  onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Bairro</label>
                            <input type="text" className="form-control" name="bairro"  onChange={this.handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Rua</label>
                            <input type="text" className="form-control" name="rua"  onChange={this.handleChange} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label">Numero</label>
                            <input type="text" className="form-control" name="numero"  onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Complemento</label>
                            <input type="text" className="form-control" name="complemento"  onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit">
                        Adicionar
                    </button>
                </form>
            </div>
        )
    }
};

export default EnderecoForm;