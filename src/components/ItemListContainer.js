import "./styles.css";
import ItemList from './ItemList';

const ItemListContainer = (props)=> {

    return(
    <div>
        <h3>
            ¡Hola, {props.nombre}!
        </h3>
        <ItemList />
    </div>
    )}
export default ItemListContainer




