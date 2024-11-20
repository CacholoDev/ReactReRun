// Definimos la URL base de nuestra API. Esto facilita cambiarla en un solo lugar si es necesario.
const API_BASEURL = "http://localhost:3000";

// Función principal `api` que recibe un `endpoint` como parámetro.
// Se usa para crear métodos genéricos (GET, POST, PATCH, DELETE) para interactuar con la API.
const api = endpoint => {
  // Función interna `req` que hace la solicitud HTTP usando `fetch`.
  // Recibe:
  // - `id`: el identificador del recurso (si aplica, como en `/tareas/1`).
  // - `method`: el método HTTP (por defecto, "GET").
  // - `body`: los datos que enviamos al servidor (para métodos como POST o PATCH).
  const req = (id, method = "GET", body) =>
    fetch(
      // Construimos la URL completa:
      // - Si `id` existe, lo agregamos a la URL (`/endpoint/id`).
      API_BASEURL + endpoint + (id ? `/${id}` : ""),
      {
        // Método HTTP (GET, POST, PATCH, DELETE).
        method,
        // Encabezados para que el servidor entienda que estamos enviando JSON.
        headers: {
          'Content-Type': 'application/json'
        },
        // Si hay un `body`, lo convertimos a JSON. Si no, dejamos `null`.
        body: body ? JSON.stringify(body) : null
      }
    )
    // Cuando la respuesta llega, la convertimos a JSON.
    .then(r => r.json());

  // Retornamos un objeto con métodos específicos para este `endpoint`.
  // Esto incluye:
  // - `get`: para obtener datos. Si pasamos `id`, busca un recurso específico.
  // - `post`: para crear nuevos recursos (con el contenido en el `body`).
  // - `patch`: para actualizar parcialmente un recurso (se necesita `id` y `body`).
  // - `delete`: para eliminar un recurso específico (`id`).
  return {
    get: (id) => req(id), // Método GET.
    post: content => req(null, "POST", content), // Método POST.
    patch: (id, content) => req(id, "PATCH", content), // Método PATCH.
    delete: id => req(id, "DELETE") // Método DELETE.
  };
};

// Creamos un objeto `cliente` que organiza los endpoints específicos de nuestra API.
// Por ejemplo:
// - `/tareas`: tiene los métodos `get`, `post`, `patch`, `delete` para las tareas.
// - `/tablero`: tiene los mismos métodos pero enfocados en el tablero.
const cliente = {
  tareas: api("/tareas"),  // Conexión para el endpoint `/tareas`.
  tablero: api("/tablero") // Conexión para el endpoint `/tablero`.
};

// Exportamos el cliente completo para usarlo en otras partes de la aplicación.
export { cliente };
