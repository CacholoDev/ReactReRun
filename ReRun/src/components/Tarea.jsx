import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { eliminada, modificada } from '../redux/TareaSlice';
import { tareaMovidaDerecha, tareaMovidaIzquierda } from '../redux/TableroSlice';

// eslint-disable-next-line react/prop-types
const Tarea = ({id}) => {
  const dispatch = useDispatch()
  const { titulo: initialTitulo } = useSelector(state => state.tareas.lista[id])
    // ATENCIÓN: al establecer el título con useState, este hook pasa a controlar su
  // estado y por tanto no se actualiza cuando se carguen tareas del servidor.
  // Lo ideal sería permitir la edición (y por tanto usar useState) únicamente
  // cuando el usuario decida editar el título
  const [titulo, setTitulo] = useState(initialTitulo)
  const eliminarTarea = () => dispatch(eliminada(id))
  const editarTarea = (event) => {
    setTitulo(event.target.value)
    dispatch(modificada({ id, titulo }))
  }
  const moverDerecha = () => {
    dispatch(tareaMovidaDerecha(id))
  }
  const moverIzquierda = () => {
    dispatch(tareaMovidaIzquierda(id))
  }

  return (
    
    <li>   
      <input type="text" value={titulo} onChange={editarTarea} />
      <button onClick={eliminarTarea}>x</button>
      <button onClick={moverIzquierda}>&lt;</button>
      <button onClick={moverDerecha}>&gt;</button>
    </li>
    
   )
}
 
 
 
 
 
 
 
 





export { Tarea };
