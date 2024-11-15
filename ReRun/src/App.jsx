import { Provider } from 'react-redux';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { Probas } from './components/Probas';
import { BottonTema } from './components/BottonTema';
import { TemasProvider, TemaContext } from './components/TemaProvider';
import { useContext } from 'react'; // Importa useContext aquí
import { store } from './redux/Store';
import { Cabecera } from './components/Cabecera';
import { Tablero } from './components/Tablero';
function App() {
  return (
    <Provider store={store}>
    <TemasProvider>
      <AppContent /> {/* Componente que contiene la lógica del tema */}
    </TemasProvider>
    </Provider>
  );
}

function AppContent() {
  const { contextoTema } = useContext(TemaContext); // Ahora está dentro del Provider

  return (
    <div className={`App ${contextoTema}`}> {/* Aplicar la clase contextoTema aquí */}
    {/*  <Probas/>  */}
      <BottonTema />
      <Cabecera />
   {/*   <ListaTareas/>  */}
      <Tablero />
 {/*     <FormularioBusqueda />  */}
{/*   <FormuSignUp/> */}
      {/* Aquí puedes incluir más componentes según lo necesites */}
    </div>
  );
}

export default App;
