import { configureStore } from "@reduxjs/toolkit";
import teacher_slice from "./redux-slices/teacher_slice";
import student_slice from "./redux-slices/student_slice";
import admin_slice from "./redux-slices/admin_slice";
import inventoryAdmin_slice from "./redux-slices/inventoryAdmin_slice";

export const store = configureStore({
  reducer: {
    teacher: teacher_slice,
    student: student_slice,
    admin: admin_slice,
    inventoryAdmin: inventoryAdmin_slice,
  },
});
