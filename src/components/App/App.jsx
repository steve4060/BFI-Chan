import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import LandingPage from '../LandingPage/LandingPage';
import { BrowserRouter, Routes, Route} from 'react-router';
import './App.css';

function App() {
    return (
        <>
            <div>
                <Banner />
                <Menu />
                <BrowserRouter>
                    <Routes>
                        <Route index element={<LandingPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
