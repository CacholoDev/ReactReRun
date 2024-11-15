import { Tarea } from "./Tarea";
import { FormularioNueva } from "./FormularioNueva";
import { useSelector } from "react-redux";
import "../ListaTareas.css";

// eslint-disable-next-line react/prop-types
const ListaTareas = ({ id: listaId }) => {
  const { nombre, lista: tareas } = useSelector((state) => state.tablero[listaId] || { lista: [] } ); //o error taba en que lista pensa que non e un array por eso poño o or

  return (
    <div className="lista">
      <h2>{nombre}</h2>
      {tareas.length > 0 && (
        <ul>
          {tareas.map((id) => (
            <Tarea key={id} id={id} />
          ))}
        </ul>
      )}
      <FormularioNueva listaId={listaId} />
    </div>
  );
};



export { ListaTareas };
