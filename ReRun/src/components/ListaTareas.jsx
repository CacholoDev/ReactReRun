import { Tarea } from "./Tarea";
import { FormularioNueva } from "./FormularioNueva";
import { useSelector } from "react-redux";
import "../ListaTareas.css";
import { useContext } from "react";
import { TemaContext } from "./temaProvider";

// eslint-disable-next-line react/prop-types
const ListaTareas = ({ id: listaId }) => {
  const { nombre, lista: tareas } = useSelector(state =>
    state.tablero.listas[listaId] ?? { nombre: "", lista: [] })
  const status = useSelector(state => state.tareas.status)
  const tema = useContext(TemaContext)

  return (
    <div className="lista" style={{background: tema.fondo, color: tema.texto}}>
      <h2>{nombre}</h2>
      {status == "LOADING" && <p>Cargando tareas...</p>}
      {status == "FAILED" && <p>Ocurrió un error</p>}
      {status == "SUCCESS" && (
        <ul>
          {tareas.map(id => <Tarea key={id} id={id} />)}
        </ul>
      )}
      <FormularioNueva listaId={listaId} />
    </div>
  )
}




export { ListaTareas };
