import { useEffect, useState } from "react";
import Item from './Item';
import "./styles.css";

//funcion que simula una API
function mock(success) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
        resolve([
        {id: 1, nombre: "Pan Nube", precio: 180, stock: 20 },
        {id: 2, nombre: "Pizza", precio: 150, stock: 15 },
        {id: 3, nombre: "Crackers", precio: 100, stock: 12 }
        ]);
    } else {
        reject({ message: "Errorcito" });
    }
    }, 2000);
});
}

//comienzo del componente
function ItemList() {
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

return (
    <div className="contenedorTarjetas">
    {
        productos.map(producto => (
        <>
        <Item titulo={producto.nombre} precio={producto.precio} stock={producto.stock} />
        </>
        ))
    }
    </div>
)
}
export default ItemList;