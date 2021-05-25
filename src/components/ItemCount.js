import { Button } from "@material-ui/core";
import {useState} from "react";
import "./styles.css";



const ItemCounter = (props)=> {
    const [count, setcount] = useState(props.cantidad)
    function sumar(){
        if (count < props.stock){
        setcount(count + 1)
        }
    }
    function restar(){
        if (count > 1)
        setcount(count - 1)
    }
    return (
        <div>
            <h5>{props.nombre}</h5>
            <Button className="botonSumaResta" onClick={restar}>-</Button>
            <span>{count}</span>
            <Button className="botonSumaResta" onClick={sumar}>+</Button>
        </div>
    )
    
}

export default ItemCounter;