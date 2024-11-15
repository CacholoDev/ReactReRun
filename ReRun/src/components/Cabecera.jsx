import { useSelector } from "react-redux";


const Cabecera = () => {
 const tarea = useSelector((state) => state.tareas.lista);
  const tareas = Object.values(tarea);
 /* si non hay tareas declaramos null */
  if(tareas.length === 0) {
    return <p>Felicidades, No tienes tareas pendientes</p>;
    }
    
  /* creamos o filter para o de 3 tareas,1 pendiente */

  const tareasPendientes = tareas.filter(tarea => !tarea.completada);


return (
    <p>{`${tareasPendientes.length} Tareas pendiente${tareasPendientes.length==1 ? ' ' : 's'}`} </p>
)
}

export { Cabecera };