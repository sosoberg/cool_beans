import {configureStore} from "@reduxjs/toolkit"

import rootReducer from "./reducers"


export default function StoreConfigure(){
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}