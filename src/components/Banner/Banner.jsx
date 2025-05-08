import logo from '/logo.svg';
import './Banner.css';

function Banner() {
    return (
        <>
            <div>
                <img src={logo} className='logo' />
                <h1>Banner</h1>
            </div>
        </>
    );
}

export default Banner;
