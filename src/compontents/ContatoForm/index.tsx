import axios from "axios";
import React from "react";

class ContatoForm extends React.Component {

    state = {
        nome: '',
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event: any) => {

        axios.post(`http://localhost:8080/contatos`, {
            nome: this.state.nome,
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
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" >Cadastrar</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ContatoForm;