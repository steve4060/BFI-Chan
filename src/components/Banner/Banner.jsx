import logo from '/logo.svg';
import './Banner.css';

function Banner(params) {
    return (
        <>
            <div className="banner">
                <img src={logo} className='logo' />
                <h1>{params.boards}</h1>
            </div>
        </>
    );
}

export default Banner;
