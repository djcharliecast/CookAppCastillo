import ItemCount from './ItemCount';
import "./styles.css";
import {useState} from "react";
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';



function ItemDetail (props) {
    const [count, setcount] = useState(1)
    function sumar(){
        if (count < props.stock){
        setcount(count + 1)
        }
    }
    function restar(){
        if (count > 1)
        setcount(count - 1)
    }
    
const [compraTerminada, setcompraTerminada] = useState(false)

let retorno = ""

function BotonCondicional(){
    if(compraTerminada){
        retorno = <NavLink to="/cart"><Button>Terminar Compra</Button></NavLink>
    }else {
        retorno = <div><ItemCount restar={restar} sumar={sumar} count={count}/><Button onClick={agregarAlCarrito}>Agregar al carrito</Button></div>
    }
    return(retorno);
}

function agregarAlCarrito(){
    setcompraTerminada(true)
}

    return (
    <div className="tarjetaProductos">
    <h1>{props.titulo}</h1>
    <div>Precio: $ {props.precio}</div>
    <div>Descripcion: {props.descripcion}</div>
    <img src={props.img} alt={props.titulo} width="200px"></img>
    <BotonCondicional/>
    </div>
    )
}
export default ItemDetail