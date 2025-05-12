import {useParams} from 'react-router';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import Boards from '../Boards/Boards';
import './App.css';

function App() {
    let params = useParams();
    return (
        <>
            <div>
                <Banner boards={params.board} />
                <Menu />
                <Boards />
            </div>
        </>
    )
}

export default App;
