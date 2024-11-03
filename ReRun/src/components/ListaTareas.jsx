import { useState } from "react";
import {Tarea} from "./Tarea";
import { nanoid } from "@reduxjs/toolkit";
import { FormularioNueva } from "./FormularioNueva";
import { useContext } from "react";
import { TemaContext } from "./TemaProvider";
const ListaTareas = () => {

//contexto tema
const {contextoTema} = useContext(TemaContext);

  const [tareas,setTareas] = useState([
    {id:nanoid(), titulo: "Aprende React", completada: false},
    {id:nanoid(), titulo: "Aprende Java", completada: true},
    {id:nanoid(), titulo: "En 1 ano cumplelo", completada: false},
  ]);

  // function pa crear novas tareas

  const agregarTarea = (titulo) => {  
    titulo.length > 0 &&  
    setTareas([...tareas, {id: nanoid(), titulo, completada: false}]),null;
  }

  /*  filter para crear nova lista de tareas quitando aque queremos eliminar*/
  
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }
  
  /* si non hay tareas declaramos null */
  if(tareas.length === 0) {
    return <p>Felicidades, No tienes tareas pendientes</p>;
    }
    
  /* creamos o filter para o de 3 tareas,1 pendiente */

  const tareasPendientes = tareas.filter(tarea => !tarea.completada);

  return (
    <>
    <div>
      <h1>KANPUS</h1>
      <p>{`${tareasPendientes.length}Tareas pendiente${tareasPendientes.length==1 ? ' ' : 's'}`} </p>
      <ul className={contextoTema === 'dark' ? 'light' : 'dark'}>
        
       { tareas.map((tarea) => (
          <Tarea key={tarea.id} 
          id={tarea.id} 
          titulo={tarea.titulo} 
          completada={tarea.completada} 
          /* Desestructuración de props: <Tarea key={index} {...tarea} /> */
          eliminarTarea={eliminarTarea}
        /*  agregarTarea={agregarTarea} 
Funciona sin recibir la prop agregarTarea en el componente Tarea porque realmente no necesita esa prop para hacer su trabajo.
La función agregarTarea se utiliza para añadir una nueva tarea a la lista completa, y en tu código actual, 
esa función solo se llama en ListaTareas (donde se gestiona la lista principal) 
y en FormularioNueva (donde se agrega una nueva tarea).*/ 
  /> 
        ))}
      </ul>
      <FormularioNueva agregarTarea={agregarTarea}/>
    </div>
    </>
  );
};

export { ListaTareas };
