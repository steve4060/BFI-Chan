import { NavLink } from 'react-router';
import { http_get_as_json, host } from '../../modules/httpHelper.mjs';
import './Menu.css';

function create_nav_link(param) {
    return <div><NavLink to={"/" + param.short_hand}>{param.title}</NavLink></ div>
}

function Menu() {

    const boards = http_get_as_json(host("Thorin") + "boards");

  return (
    <>
      <div className='menu'>
        <nav>
            {boards.map(x => create_nav_link(x))}
        </nav>
      </div>
    </>
  );
}

export default Menu;
