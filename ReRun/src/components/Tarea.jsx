import PropTypes from 'prop-types';

const Tarea = ({id,titulo,completada,eliminarTarea}) => {

  const handleButtonEliminar = () => {
    eliminarTarea(id);
  } 

return (
  <li className={completada ? "done" : "todo"}>
    <label>
    <input type="checkbox" defaultChecked={completada} />
    {completada ? 'DONE' : 'TODO'} 
    </label>
    {titulo}

{/* boton de eliminar si completada e true e de editar si e false */}
    { completada && <button onClick={handleButtonEliminar}>Eliminar</button> }
    { completada || <button>Editar</button> }
  </li>
)

};

Tarea.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  completada: PropTypes.bool.isRequired,
  eliminarTarea: PropTypes.func.isRequired,
};


export { Tarea };
