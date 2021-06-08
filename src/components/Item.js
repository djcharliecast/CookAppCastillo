import { NavLink } from "react-router-dom";
import "./styles.css";

function Item (props) {
    return (
    <div className="tarjetaProductos">
    <h1>{props.titulo}</h1>
    <p>Precio: $ {props.precio}</p>
    <NavLink to={`/detalles/${props.id}`}> Ver detalles</NavLink>
    </div>
    )
}
export default Item