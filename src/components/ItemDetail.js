import "./styles.css";

function ItemDetail (props) {
    return (
    <div className="tarjetaProductos">
    <h1>{props.titulo}</h1>
    <div>Precio: $ {props.precio}</div>
    <div>Descripcion: {props.descripcion}</div>
    <img src={props.img} alt={props.titulo} width="200px"></img>
    </div>
    )
}
export default ItemDetail