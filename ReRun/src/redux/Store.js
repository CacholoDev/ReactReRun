import { configureStore } from "@reduxjs/toolkit";
import  tareas  from "./TareaSlice";
import  tablero  from "./TableroSlice";

const store = configureStore({
    reducer: {tareas,tablero},
});

export { store };