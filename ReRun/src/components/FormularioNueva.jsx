import { useState } from "react";
import { useDispatch } from "react-redux";
import { creada } from "../redux/TareaSlice";

// eslint-disable-next-line react/prop-types
const FormularioNueva = ({ listaId }) => {
    const [nuevaTitulo, setNuevaTitulo] = useState("")
    const dispatch = useDispatch()
  
    const manejarSubmit = (event) => {
      event.preventDefault()
      dispatch(creada(nuevaTitulo, listaId))
      setNuevaTitulo("")
    }
  
    return (
      <form onSubmit={manejarSubmit}>
        <input type="text" name="titulo" placeholder="Nueva tarea"
          onChange={event => setNuevaTitulo(event.target.value)}
          value={nuevaTitulo} />
      </form>
    )
  }
  



export { FormularioNueva };