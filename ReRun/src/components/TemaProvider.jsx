import { createContext, useState} from "react"
import PropTypes from 'prop-types';


export const TemaContext = createContext();


const TemasProvider = ({children}) => {
    
    const [contextoTema, setContextoTema] = useState("dark");

    

    const cambiarTema = () => {
        setContextoTema(contextoTema === "dark" ? "light" : "dark");
    }

    return (
        // 3. Pasar el estado y función en el value del contexto
        <TemaContext.Provider value={{ contextoTema, cambiarTema }}>
            {children}
        </TemaContext.Provider>
    )


}

TemasProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { TemasProvider };