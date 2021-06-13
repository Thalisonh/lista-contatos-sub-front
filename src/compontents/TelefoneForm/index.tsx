import ButtonCadastrar from "../ButtonCadastrar";

function TelefoneForm() {

    return (
        <>
            <div className="container">
                <form>
                    <div className="container row g-3">
                        <div className="col-md-4">
                            <label className="form-label">DDD</label>
                            <input type="text" className="form-control" name="cidade" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Telefone/Celular</label>
                            <input type="text" className="form-control" name="cidade" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Operadora</label>
                            <input type="text" className="form-control" name="cidade" />
                        </div>
                    </div>
                </form>
                <ButtonCadastrar/>
            </div>
        </>
    )
}

export default TelefoneForm;