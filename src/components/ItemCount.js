import { Button } from "@material-ui/core";
import "./styles.css";



const ItemCounter = (props)=> {
    
    return (
        <div>
            <h5>{props.nombre}</h5>
            <Button className="botonSumaResta" onClick={props.restar}>-</Button>
            <span>{props.count}</span>
            <Button className="botonSumaResta" onClick={props.sumar}>+</Button>
        </div>
    )
    
}

export default ItemCounter;