import {NavLink} from "react-router";

function Boardcard(props) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <NavLink to={props.short_hand} end>
            <h5 className="card-title">{props.title}</h5>
          </NavLink>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Boardcard;
