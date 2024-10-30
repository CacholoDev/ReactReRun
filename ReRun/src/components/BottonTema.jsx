import { useContext } from "react"
import { TemaContext } from "./TemaProvider";

const BottonTema = () => { 
    const { contextoTema, cambiarTema } = useContext(TemaContext);
 
    return (
        
        <div className={contextoTema}>
            <h2>Temas</h2>
            <button onClick={cambiarTema}>Cambiar Tema</button>
        </div>
    );

}

export { BottonTema };