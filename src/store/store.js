import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import user_slice from "./redux-slices/user_slice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, user_slice);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
