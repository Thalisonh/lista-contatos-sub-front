import ButtonCard from "../ButtonCard";

function CardContato(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-11">
                        <div className="col-sm-3"><b>Nome:</b></div>
                        <div className="col-sm-6"><b>Telefone:</b></div>
                        <div className="col-sm-12"><b>Endereço:</b></div>
                    </div>
                    <div className="col-sm-1">
                    <ButtonCard/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CardContato