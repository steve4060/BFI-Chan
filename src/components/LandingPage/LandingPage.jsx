import './LandingPage.css';
import Boardcard from '../Boardcard/Boardcard';
import {http_get_as_json} from "../../modules/httpHelper.mjs";

function create_entry(board_term) {
    return (
        <Boardcard 
            title={board_term.title}
            short_hand={board_term.short_hand}
            description={board_term.desc}
            key={board_term.id}
        />
    )
}

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    return JSON.parse(xmlHttp.responseText);
}

function LandingPage() {

    const boards = http_get_as_json("http://localhost:8000/boards");

    return (
        <>
            <div>
                <h1>Landing Page</h1>
                <div className="card">
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <p className="card-text">Was ist BFI-chan?</p>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        Boards
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {boards.map(x => create_entry(x))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
