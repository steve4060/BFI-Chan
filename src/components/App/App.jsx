import {useParams} from 'react-router';
import {http_get_as_json, host} from "../../modules/httpHelper.mjs";
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Boards from '../Boards/Boards';
import FourOFour from '../FourOFour/FourOFour';
import './App.css';

function App() {
    const params = useParams();
    const url = host() + "boards?short_hand=" + params.board;
    console.log(url);
    const bord = http_get_as_json(url);
    const error = "Board " + params.board + " dos't exist";
    const fof = bord.length === 0;
    const Board = fof ? <FourOFour error_masage={error} /> : <Boards id={bord[0].id} />;
    const Name = fof ? "" : bord[0].title;
    return (
        <>
            <div>
                <Banner boards={Name} />
                <div className="lol">
                    <Menu />
                    {Board}
                </div>
            </div>
        </>
    )
}

export default App;
