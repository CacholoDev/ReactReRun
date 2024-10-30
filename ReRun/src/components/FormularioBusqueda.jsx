const FormularioBusqueda = () => {
    return (
      <form action="search" method="GET">
          <input type="search" placeholder="Términos de búsqueda" />
          <button type="submit">Buscar</button>
      </form>
    )
  }
  

export { FormularioBusqueda };