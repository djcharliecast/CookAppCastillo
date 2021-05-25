import ItemCount from './ItemCount';
import "./styles.css";

function Item (props) {
    return (
    <div className="tarjetaProductos">
    <h1>{props.titulo}</h1>
    <div>Precio: $ {props.precio}</div>
    <ItemCount cantidad={1} stock={props.stock}/>
    </div>
    )
}
export default Item