import './Treads.css';

function Tread (params) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{params.Title}</h5>
                    <p className="card-text">{params.Dist}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{params.Command1}</li>
                    <li className="list-group-item">{params.Command2}</li>
                </ul>
            </div>
        </>
    );
}

export default Tread;
