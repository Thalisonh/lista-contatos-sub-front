import React, { useState } from 'react';

const EnderecoForm = (onSubmit:any) => {

    const [novoEndereco, setnovoEndereco] = useState('');

    function setNewTask(target: any) {
        setnovoEndereco(target.value);
    }

    function submit(e: any) {
        e.preventDefault();
        onSubmit(novoEndereco);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="container row g-3" onChange={setNewTask}>
                    <div className="col-md-4">
                        <label className="form-label">CEP</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Cidade</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Bairro</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Rua</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Numero</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Complemento</label>
                        <input type="text" className="form-control" name="nome" />
                    </div>
                    <button>Adicionar Endereço</button>
                </div>

                {/* <input
                    className="Todo-input"
                    placeholder="Digite uma nova tarefa"
                    onChange={setNewTask}
                /> */}
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
};

export default EnderecoForm;