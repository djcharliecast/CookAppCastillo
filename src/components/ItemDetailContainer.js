import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import "./styles.css";
import crackers from '../images/crackers.jpg';
import panLomo from '../images/panLomo.jpg';
import pizza from '../images/pizza.jpg';
import {useParams} from 'react-router-dom';


//funcion que simula una API
function mock(success) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
        resolve([
        {id: 1, nombre: "Pan de Lomo", precio: 180, stock: 20, img: panLomo, descripcion: "Pan de lomo a base de huevo sin harina" },
        {id: 2, nombre: "Pizza", precio: 150, stock: 15, img: pizza, descripcion: "Prepizza a base de huevo sin harina" },
        {id: 3, nombre: "Crackers", precio: 100, stock: 12, img: crackers, descripcion: "Galletas crocantes a base de semillas sin harina" }
        ]);
    } else {
        reject({ message: "Errorcito" });
    }
    }, 2000);
});
}

//comienzo del componente
function ItemDetailContainer() {
    const {id}= useParams();
  //useState para actualizar el valor del array productos
const [productos, setProductos] = useState([])

  //función que llama a la API, baja los datos y actualiza el array productos, que es de donde vamos a sacar los datos a renderizar
async function obtenerDatos() {
    const datos = await mock(true);
    setProductos (datos)
}
  //useEffect que actualiza el contenido de las tarjetas el el primer renderizado 
useEffect(()=>{
    obtenerDatos()
}, [])

var retorno = ""

for (const item of productos){
    if (parseInt(id) == item.id){
        retorno = <ItemDetail titulo={item.nombre} precio={item.precio} stock={item.stock} img={item.img} descripcion={item.descripcion}/>
    }}


return (
    <div className="contenedorTarjetas">
        {retorno}
    </div>
)

}
export default ItemDetailContainer;