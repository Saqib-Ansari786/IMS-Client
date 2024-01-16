import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import teacher_slice from "./redux-slices/teacher_slice";
import user_slice from "./redux-slices/user_slice";
import student_slice from "./redux-slices/student_slice";
import courses_slice from "./redux-slices/courses_slice";
import teachers_slice from "./redux-slices/teachers_slice";
import students_slice from "./redux-slices/students_slice";
import products_slice from "./redux-slices/products_slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "teacher", "student", "courses", "teachers", "students"],
};

const rootReducer = combineReducers({
  user: user_slice,
  teacher: teacher_slice,
  student: student_slice,
  courses: courses_slice,
  teachers: teachers_slice,
  students: students_slice,
  products: products_slice,
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
