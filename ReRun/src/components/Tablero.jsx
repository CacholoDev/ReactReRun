import { useDispatch, useSelector } from "react-redux";
import { listaCreada } from "../redux/TableroSlice";
import { useMemo, useState } from "react";
import { ListaTareas } from "./ListaTareas";

const Tablero = () => {
         // 1.Recupera las listas (claves) desde Redux
// Usa useSelector directamente en el cuerpo del componente
const tablero = useSelector((state) => state.tablero);        
const listas = useMemo(() => Object.keys(tablero), [tablero]);
console.log(listas); // Para verificar las claves obtenidas

         // 2.Estado local para almacenar el valor temporal de una nueva lista
       const [nuevaLista, setNuevaLista] = useState("");

         // 3.Hook de dispatch para enviar acciones al store
         const dispatch = useDispatch();

         // 4.Función para manejar el envío del formulario
         const crearLista = (e) => {
           e.preventDefault();
    // Despacha la acción `listaCreada` con el valor de `nuevaLista`
           dispatch(listaCreada(nuevaLista));
          // Reinicia el valor de `nuevaLista` después de agregar la lista     
           setNuevaLista("");
         };

          return (
    <div className="tablero">
      {listas.map(id => <ListaTareas key={id} id={id} />)}
      <div className="lista">
        <form onSubmit={crearLista}>
          <input type="text" placeholder="Nueva lista" value={nuevaLista} onChange={e => setNuevaLista(e.target.value)} />
          <p><button type="submit">Crear lista</button></p>
        </form>
      </div>
    </div>
  );
    
}

export { Tablero };