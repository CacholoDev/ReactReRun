import { useSelector } from 'react-redux';

const Probas = () => { 
    const tareas = useSelector((state) => Object.keys(state.tareas.lista));

    

    return console.log("Contenido de tareas:", tareas); // Log para ver los datos en la consola
}

export { Probas };