import {NavLink} from 'react-router';
import logo from '/logo.svg';
import './Banner.css';

function Banner(params) {
    return (
        <>
            <div className="banner">
                <NavLink to="/">
                    <img src={logo} className='logo' />
                </ NavLink>
                <h1>{params.boards}</h1>
            </div>
        </>
    );
}

export default Banner;
