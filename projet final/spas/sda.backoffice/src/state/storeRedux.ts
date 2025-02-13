import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"

export const storeRedux = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof storeRedux.getState>
export type AppDispatch = typeof storeRedux.dispatch