import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cliente } from "../api";

const tableroSlice = createSlice({
  name: "tablero",
  initialState: { status: 'LOADING', listas: {} },
  extraReducers: builder => {
    builder
      .addCase(cargarTablero.pending, state => {
        state.status = "LOADING"
      })
      .addCase(cargarTablero.fulfilled, (state, action) => {
        for (let lista of action.payload) {
          state.listas[lista.id] = lista
        }
        state.status = "SUCCESS"
      })
      .addCase(cargarTablero.rejected, state => {
        state.status = "FAILED"
      })
  }
})


export const { tareaQuitada, tareaAgregada } =
  tableroSlice.actions;

  // THUNKS 
// Escribimos la lógica de mover una tarea en forma de "thunk",
// que lanza a su vez las acciones de quitar la tarea de un
// tablero y agregarla a otro.
// La función `tareaMovidaDerecha` es un "thunk action creator", que una vez
// que se llama con parámetros devuelve un "thunk". Los "thunks" se
// pueden despachar igual que las acciones, con dispatch().
export const tareaMovidaDerecha = tarea_id => (dispatch, getState) => {
  // Consultar el tablero actual
  const tablero = getState().tablero
  // Encontrar la lista a la que pertenece la tarea
  const from_index = Object.values(tablero).findIndex(v => v.lista.includes(tarea_id))
  // Calcular la siguiente lista
  const to_index = from_index + 1
  // Solo movemos si existe una lista más a la derecha
  if (to_index < Object.keys(tablero).length) {
    const [from_id, to_id] = Object.keys(tablero).slice(from_index, to_index + 1)
    dispatch(tareaQuitada({ tarea_id, from_id }))
    dispatch(tareaAgregada({ tarea_id, to_id }))
  }
}

export const tareaMovidaIzquierda = tarea_id => (dispatch, getState) => {
  // Consultar el tablero actual
  const tablero = getState().tablero
  // Encontrar la lista a la que pertenece la tarea
  const from_index = Object.values(tablero).findIndex(v => v.lista.includes(tarea_id))
  // Calcular la siguiente lista
  const to_index = from_index - 1
  // Solo movemos si existe una lista más a la derecha
  if (to_index >= 0) {
    const [to_id,from_id] = Object.keys(tablero).slice(to_index,from_index + 1)
    dispatch(tareaQuitada({ tarea_id, from_id }))
    dispatch(tareaAgregada({ tarea_id, to_id }))
  }
}


//TUNKS API

// tableroSlice.js
export const cargarTablero = createAsyncThunk(
  'tablero/cargarTablero',
  async () => await cliente.tablero.get()
)
export const listaCreada = createAsyncThunk(
  'tablero/listaCreada',
  async nombre => await cliente.tablero.post({ nombre })
)


export default tableroSlice.reducer;
