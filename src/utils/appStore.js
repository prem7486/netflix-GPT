import { configureStore } from "@reduxjs/toolkit";
import userRedeucer from "./userSlice";
const appStore = configureStore({
    reducer: {
        user: userRedeucer,
    },
});

export default appStore;