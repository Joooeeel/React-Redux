import { configureStore } from '@reduxjs/toolkit';

//importamos los slices (que son reducers) que hemos creado y necesitaremos para almacenar información
import countReducer from './features/counter/counterSlice';

//configureStore, método necessario para crear los stores, no se puede cambiar el nombre al que se quiera. En el momento de importar, si que se le puede dar el nombre qwue se quiera al import.
export default configureStore({
    reducer: {
        count: countReducer,
    },
})