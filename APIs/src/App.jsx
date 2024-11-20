import { useEffect, useState } from 'react'
import './index.css'
import { getBlog, saveNewPost } from './api'
import { Post } from './Post';


const useFlag = (valorDefecto = false) => {
  const [valor, setValor] = useState(valorDefecto); // Estado booleano
  return [
    valor,            // Estado actual
    () => setValor(true),  // Función para activar
    () => setValor(false), // Función para desactivar
  ];
};




function App() {
  const [blog, setBlog] = useState([])
  const [obsoleto, set, unset] = useFlag()
  useEffect(() => {
    getBlog().then(setBlog); // 1. Acción principal: Obtén y guarda el blog.
    return unset;           // 2. Limpieza: Se llama antes de ejecutar el efecto de nuevo o al desmontar.
  }, [obsoleto]);           // 3. Condición: Vuelve a ejecutarse si `obsoleto` cambia.
  
  //

  const [postContent, setPostContent] = useState("")
  const handleSubmit = event => {
    event.preventDefault()
    saveNewPost(postContent).then(set)
    setPostContent("")
  }
 
  return (
    <div className="App">
      <h1>Microblog personal</h1>
      <form onSubmit={handleSubmit} className='new'>
        <textarea value={postContent} placeholder="Nuevo post"
          onChange={(event) => setPostContent(event.target.value)} />
        <button type="submit">Publicar</button>
      </form>
      {blog.map(p => <Post {...p} key={p.id} onChange={set} /> )}
    </div>
  )
}




export default App;
