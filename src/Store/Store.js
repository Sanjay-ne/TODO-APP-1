import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "../Features/Todoslice";

const store = configureStore({
    reducer: Todoslice
})
export default store