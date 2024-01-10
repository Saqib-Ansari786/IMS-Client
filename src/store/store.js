import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import teacher_slice from "./redux-slices/teacher_slice";
import user_slice from "./redux-slices/user_slice";
import student_slice from "./redux-slices/student_slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "teacher", "student"],
};

const rootReducer = combineReducers({
  user: user_slice,
  teacher: teacher_slice,
  student: student_slice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
