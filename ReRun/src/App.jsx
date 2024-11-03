import './App.css';
import { BottonTema } from './components/BottonTema';
import { FormularioBusqueda } from './components/FormularioBusqueda';
import { FormuSignUp } from './components/FormuSignUp';
import { ListaTareas } from './components/ListaTareas';
import { TemasProvider, TemaContext } from './components/TemaProvider';
import { useContext } from 'react'; // Importa useContext aquí

function App() {
  return (
    <TemasProvider>
      <AppContent /> {/* Componente que contiene la lógica del tema */}
    </TemasProvider>
  );
}

function AppContent() {
  const { contextoTema } = useContext(TemaContext); // Ahora está dentro del Provider

  return (
    <div className={`App ${contextoTema}`}> {/* Aplicar la clase contextoTema aquí */}
      <BottonTema />
      <ListaTareas />
      <FormularioBusqueda />
      <FormuSignUp/>
      {/* Aquí puedes incluir más componentes según lo necesites */}
    </div>
  );
}

export default App;
