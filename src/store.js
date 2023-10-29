import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./cardSlice/cardSlice"

export const store = configureStore ({
    reducer : {
        users : usersReducer
    }
})