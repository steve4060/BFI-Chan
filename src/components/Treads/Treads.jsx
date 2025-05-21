import './Treads.css';

function Tread (params) {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{params.Title}</h5>
                    <p class="card-text">{params.Dist}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{params.Command1}</li>
                    <li class="list-group-item">{params.Command2}</li>
                </ul>
            </div>
        </>
    );
}

export default Tread;
