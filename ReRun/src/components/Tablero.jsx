import { useDispatch, useSelector } from "react-redux";
import { cargarTablero, listaCreada } from "../redux/TableroSlice";
import { useEffect, useState } from "react";
import { ListaTareas } from "./ListaTareas";
import { tareasCargadas } from "../redux/TareaSlice";

const Tablero = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(cargarTablero()).then(() => dispatch(tareasCargadas())) }, [])
  const { status, listas } = useSelector(
    state => state.tablero
  )

  const [nuevaLista, setNuevaLista] = useState("")
  const crearLista = (event) => {
    event.preventDefault()
    dispatch(listaCreada(nuevaLista))
    setNuevaLista("")
  }
  
  if (status == "LOADING") return <p>Cargando tablero...</p>
  if (status == "FAILED") return <p>Error al cargar el tablero.</p>

  return (
    <div className="tablero">
      {Object.keys(listas).map(id => <ListaTareas key={id} id={id} />)}
      <div className="lista">
        <form onSubmit={crearLista}>
          <input type="text" placeholder="Nueva lista" value={nuevaLista} onChange={e => setNuevaLista(e.target.value)} />
          <p><button type="submit">Crear lista</button></p>
        </form>
      </div>
    </div>
  )
}


export { Tablero };