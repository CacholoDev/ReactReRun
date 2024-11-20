import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { cliente } from "../api";

// Estado inicial separado, permite que el estado inicial esté claro y organizado
const initialState = {
    lista: {
        1: { titulo: "Aprender componentes de React", completada: false },
        2: { titulo: "Completar las prácticas del módulo 1", completada: true },
        3: { titulo: "Realizar la autoevaluación", completada: false },
    }
};

// Slice usando el estado inicial separado
const TareaSlice = createSlice({
    name: 'tareas',
    initialState,
    reducers: {
        eliminada: (state, action) => { delete state.lista[action.payload] },
        alternada: (state, action) => {
            const id = action.payload.toString();
            if (state.lista[id]) {
                state.lista[id].completada = !state.lista[id].completada;
            } else {
                console.error(`No se encontró la tarea con id: ${id}`);
            }
        },
        modificada: (state, action) => {
            state.lista[action.payload.id].titulo = action.payload.titulo;
        },
        todasCompletadas: (state) => {
            for (let id in state.lista) {
                state.lista[id].completada = true;
            }
        },
        creada : {
            prepare(titulo,listaId) {
                return { payload: { id: nanoid(), titulo,listaId } };
            },
            reducer(state, action) {
                state.lista[action.payload.id] = {
                    titulo: action.payload.titulo                };
            }
        }
    }
});


//THUNKS api
// tareasSlice.js
export const tareasCargadas = createAsyncThunk(
    'tareas/tareasCargadas',
    async () => await cliente.tareas.get()
  )
  export const tareaCreada = createAsyncThunk(
    'tareas/creada',
    async ({titulo, lista}) => await cliente.tareas.post({ titulo, lista })
  )
  export const tareaEliminada = createAsyncThunk(
    'tareas/eliminada',
    async id => await cliente.tareas.delete(id)
  )
  export const tareaMovida = createAsyncThunk(
    'tareas/movida',
    async ({ id, lista }) => await cliente.tareas.patch(id, { lista })
  )
  export const tareaRenombrada = createAsyncThunk(
    'tareas/renombrada',
    async ({ id, titulo }) => await cliente.tareas.patch(id, { titulo })
  )
  

export default TareaSlice.reducer;
export const { eliminada, modificada, creada } = TareaSlice.actions;