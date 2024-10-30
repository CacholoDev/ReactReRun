import { useState } from "react";
import PropTypes from 'prop-types';

const FormularioNueva = ({agregarTarea}) => {
    const [titulo,setTitulo] = useState("");

    const agregar = (e) => {
        e.preventDefault();
        agregarTarea(titulo);
        setTitulo("");
    }

    return (
        <div>
            <h2>añadir nueva tarea</h2>
            <form onSubmit={agregar}>
                <input type="text" name="titulo" placeholder="añade titulo"  onChange={e => setTitulo(e.target.value)} value={titulo}/>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )

}

FormularioNueva.propTypes = {
    agregarTarea: PropTypes.func.isRequired,
};

export { FormularioNueva };