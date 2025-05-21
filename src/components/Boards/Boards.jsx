import {http_get_as_json, host} from "../../modules/httpHelper.mjs";
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Treads from '../Treads/Treads';
import './Boards.css';

function mk_tread (params) {
    return(
        <Treads
            id ={params.id}
            Title={params.title}
            Dist={params.dist}
            Command1={params.command1}
            Command2={params.command2}
        />
    );
}

function Boards(params) {

    const treads = http_get_as_json(host() + "threads?board_id=" + params.id);

    return (
        <>
            <div className="boards">
                {treads.map(x => mk_tread(x))}
            </div>
        </>
    )
}

export default Boards;
